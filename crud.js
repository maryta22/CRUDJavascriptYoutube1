var nuevoId;
var db = openDatabase("itemDB", "1.0", "itemDB", 65535);

//funcion para limpiar los datos
function limpiar() {
    document.getElementById("item").value = "";
    document.getElementById("price").value = "";
}

//funcionalidad de los botones
$(function(){
    $("#crear").click(function () {
        db.transaction(function (transaction) {
            var sql = "CREATE TABLE productos "+
            "(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
                "item VARCHAR(100) NOT NULL, " +
                "precio DECIMAL(5,2) NOT NULL)";
        transaction.executeSql(sql, undefined, function () {
            alert("Tabla creada exitosamente");
        }, function(transaction, err){
            alert(err.message +" equis")
        })
        });
    });
})
