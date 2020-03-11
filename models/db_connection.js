var mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "MWD_Projekt"
});
/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "INSERT INTO Benutzer(B_Vorname,B_Nachname,B_Email_adresse,B_Passwort) VALUES('Name','Nachname','email','Pass')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

})*/

module.exports = con;