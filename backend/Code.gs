/** EUROMASTER Advent 2026 – im Apps-Script-Projekt der Ziel-Tabelle ausführen. */
const SETTINGS = Object.freeze({
  spreadsheetId: '1MW9MiSW6HRsV8SrUknZA8LZHjEnnuc9LEh2u2q7dhsg',
  campaign: 'euromaster-advent-2026', year: 2026, testDate: '2026-10-29',
  masterSheet: 'Advent Teilnahmen 2026', timezone: 'Europe/Berlin'
});
const HEADERS = ['Eingetragen am', 'Datum', 'Türchen', 'Name', 'E-Mail', 'Teilnahmeschlüssel'];
function result_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
function doGet() { return result_({ok:true, service:'EUROMASTER Advent 2026', acceptingPersonalDataVia:'POST only',version:'2026-10-29-test1',testDate:SETTINGS.testDate,testDay:1}); }
function textCell_(value) { return /^[=+\-@\s]/.test(value) ? "'"+value : value; }
function validate_(data, now) {
  if(!data || data.campaign!==SETTINGS.campaign || data.preview!==false || data.year!==SETTINGS.year || !Number.isInteger(data.day) || data.day<1 || data.day>24) return {error:'invalid'};
  const today=Utilities.formatDate(now, SETTINGS.timezone, 'yyyy-MM-dd');
  const expected=SETTINGS.year+'-12-'+String(data.day).padStart(2,'0');
  const test=data.day===1&&today===SETTINGS.testDate;
  if(today!==expected&&!test)return {error:'closed'};
  const name=String(data.name||'').trim().replace(/[\r\n\t]/g,' ');
  const email=String(data.email||'').trim().toLowerCase();
  if(name.length<2 || name.length>120 || email.length>254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\u0000-\u001f\u007f]/.test(name+email))return {error:'invalid'};
  return {name,email,test,date:test?today:expected,key:SETTINGS.campaign+':'+(test?'TEST:'+today+':1':expected)+':'+email};
}
function doPost(e) {
  let data;
  try {if(!e || !e.postData || e.postData.contents.length>4096)return result_({ok:false,code:'invalid'});data=JSON.parse(e.postData.contents);}catch(_){return result_({ok:false,code:'invalid'});}
  const now=new Date(), input=validate_(data,now);
  if(input.error)return result_({ok:false,code:input.error});
  const lock=LockService.getScriptLock();
  if(!lock.tryLock(20000))return result_({ok:false,code:'busy'});
  try {
    // Check again after waiting: a request must not cross the day's closing boundary.
    const checked=validate_(data,new Date());if(checked.error)return result_({ok:false,code:checked.error});
    const book=SpreadsheetApp.openById(SETTINGS.spreadsheetId),sheet=book.getSheetByName(SETTINGS.masterSheet);
    if(!sheet || sheet.getRange(1,6).getValue()!==HEADERS[5])return result_({ok:false,code:'not_configured'});
    const last=sheet.getLastRow();
    if(last>1 && sheet.getRange(2,6,last-1,1).createTextFinder(input.key).matchEntireCell(true).useRegularExpression(false).findNext())return result_({ok:true,duplicate:true,day:data.day,test:input.test});
    const row=[Utilities.formatDate(now,SETTINGS.timezone,'yyyy-MM-dd HH:mm:ss'),input.date,data.day,textCell_(input.name),textCell_(input.email),textCell_(input.key)];
    sheet.getRange(last+1,1,1,6).setNumberFormat('@').setValues([row]);
    SpreadsheetApp.flush();
    return result_({ok:true,duplicate:false,day:data.day,test:input.test});
  }catch(error){console.error('Advent storage failure');return result_({ok:false,code:'storage'});}
  finally {lock.releaseLock();}
}
/** Einmal ausführen. Bestehende fremde Tabellenblätter bleiben unberührt. */
function setupAdvent() {
  const lock=LockService.getScriptLock();lock.waitLock(20000);
  try {
    const book=SpreadsheetApp.openById(SETTINGS.spreadsheetId);
    let sheet=book.getSheetByName(SETTINGS.masterSheet);
    if(!sheet){sheet=book.insertSheet(SETTINGS.masterSheet);sheet.getRange(1,1,1,6).setValues([HEADERS]);}
    if(JSON.stringify(sheet.getRange(1,1,1,6).getValues()[0])!==JSON.stringify(HEADERS))throw Error('Vorhandenes Blatt hat andere Spalten. Einrichtung ohne Änderung abgebrochen.');
    sheet.setFrozenRows(1);sheet.getRange(1,1,1,6).setBackground('#174b91').setFontColor('#ffffff').setFontWeight('bold');
    sheet.setColumnWidth(1,170);sheet.setColumnWidth(2,110);sheet.setColumnWidth(3,80);sheet.setColumnWidth(4,220);sheet.setColumnWidth(5,280);sheet.hideColumns(6);
    if(!sheet.getFilter())sheet.getRange(1,1,sheet.getMaxRows(),6).createFilter();
    for(let day=1;day<=24;day++){
      const dd=String(day).padStart(2,'0'),title='Advent '+dd+'.12.2026';
      if(book.getSheetByName(title))continue;
      const daily=book.insertSheet(title);
      daily.getRange('A1').setFormula('=QUERY(\''+SETTINGS.masterSheet+'\'!A:F,"select A,B,C,D,E where B = \''+SETTINGS.year+'-12-'+dd+'\'",1)');
      daily.setFrozenRows(1);daily.getRange(1,1,1,5).setBackground('#174b91').setFontColor('#ffffff').setFontWeight('bold');
      daily.setColumnWidth(1,170);daily.setColumnWidth(2,110);daily.setColumnWidth(3,80);daily.setColumnWidth(4,220);daily.setColumnWidth(5,280);
    }
    SpreadsheetApp.flush();
  } finally {lock.releaseLock();}
}
