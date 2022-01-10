var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"learner"
});
con.connect(function(err){
    if (err) throw err
    console.log("databbase is connected")})
var sql = "CREATE TABLE crudpost( id int NOT NULL AUTO_INCREMENT,name varchar(255) NOT NULL ,email varchar(255),password VARCHAR(255),PRIMARY KEY (id))" ;
con.query(sql,function(err,result){
    if (err) {
        console.log("Already table is there");
    }else{console.log("Table is Created")};

})


module.exports=con