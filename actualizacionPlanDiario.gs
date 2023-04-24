function ActualizarPlan() {
  var codigodiario;
  var rangoCodigosdiario;
  var rangoInformaciondiario;
  var rangoBusquedadiario;
  var filadiaria;
  var column;
  var sheet =SpreadsheetApp.getActiveSpreadsheet().getSheetByName('PLAN DIARIO 17 AL 28 ABRL ');
  var data = sheet.getDataRange().getValues();
  var today = new Date();

  for (var i = 0; i < data[5].length; i++) {
    if (data[5][i] instanceof Date && data[5][i].getDate() == today.getDate()) {
      column=i;
      Logger.log('fechaencontrada',column)
    }

  }
  // Selecciona el rango de códigos en la hoja 1
  rangoCodigosdiario = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('control produccion diaria').getDataRange().getValues().map(row => row[3]);

  // Selecciona el rango de información en la hoja 1
  rangoInformaciondiario = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('control produccion diaria').getDataRange().getValues().map(row => row[5]);

  // Selecciona el rango de búsqueda en la hoja 2
  rangoBusquedadiario = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('PLAN DIARIO 17 AL 28 ABRL ').getDataRange().getValues().map(row => row[1]);
  // Itera sobre cada celda del rango de búsqueda en la hoja 2
  for (var i = 0; i < rangoBusquedadiario.length; i++) {
    codigodiario = rangoBusquedadiario[i];
    filadiaria = i + 1;
    if (codigodiario != ""){
      if (rangoCodigosdiario.includes(codigodiario) && rangoCodigosdiario != ' ') { // Si encuentra el código
        SpreadsheetApp.getActiveSpreadsheet().getSheetByName('PLAN DIARIO 17 AL 28 ABRL ').getRange(filadiaria, column+1).setValue(rangoInformaciondiario[rangoCodigosdiario.indexOf(codigodiario)]);
      }
    }
  } 
}
