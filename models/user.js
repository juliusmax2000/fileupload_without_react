var DBC= require('./db_connection'); //verbindet sich mit Datenbank

//Registrieren 
const insertuser = function(Vname,Nname,Email,Pass) {//Funktioniert das mit der eingabe der Variablen?
    
    conn.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO Benutzer(B_Vorname,B_Nachname,B_Email_adresse,B_Passwort) VALUES('"+Vname+"','"+Nname+"','"+Email+"','"+Pass+"')";
        conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        });
    
    });
    
};
const test="HALLO";
//Anmelden
const getuser= async()=>{
    
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM customers", function (err, result, fields) {
          if (err) throw err;
          //console.log(result);
          result.Email
        });
      });

}

module.exports=test;
module.exports=insertuser;
module.exports=getuser;