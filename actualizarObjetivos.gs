function ActualizarObjetivos() {

  var codigo;
  var rangoCodigos;
  var rangoInformacion;
  var rangoBusqueda;
  var fila;

  // Selecciona el rango de códigos en la hoja 1
  rangoCodigos = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('PLAN DIARIO 17 AL 28 ABRL ').getDataRange().getValues().map(row => row[1]);

  // Selecciona el rango de información en la hoja 1
  rangoInformacion = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('PLAN DIARIO 17 AL 28 ABRL ').getDataRange().getValues().map(row => row[4]);

  // Selecciona el rango de búsqueda en la hoja 2
  rangoBusqueda = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Objetivos').getDataRange().getValues().map(row => row[2]);
  // Itera sobre cada celda del rango de búsqueda en la hoja 2
  for (var i = 0; i < rangoBusqueda.length; i++) {
    codigo = rangoBusqueda[i];
    fila = i + 1;
    if (codigo != ""){
      if (rangoCodigos.includes(codigo) && rangoCodigos != ' ') { // Si encuentra el código
        SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Objetivos').getRange(fila, 24).setValue(rangoInformacion[rangoCodigos.indexOf(codigo)]);
      }
    }
  }
  Logger.log(rangoBusqueda) 
   Logger.log(rangoCodigos) 
    Logger.log(rangoInformacion) 
}
