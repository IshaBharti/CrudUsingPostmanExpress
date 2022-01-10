const express = require('express')
const app = express()
const bodyparser=require("body-parser")
const port = 3000
const con=require("./db/database")
app.use(bodyparser.urlencoded())
app.use(bodyparser.json())
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/data',(req,res)=>{
    const data=req.body
    // console.log(data.name,data.email,data.password)
     var sql =`insert into crudpost(name,email,password) values('${data.name}','${data.email}','${data.password}')`
      con.query(sql,(err,result)=>{
        if (err) throw err;
        else{
            console.log("Data is Inserted")
            res.send("<h1> Data is inserted </h1>")
}
    })
app.get('/datashow',(req,res)=>{
        var sql="select * from crudpost";
        con.query(sql,(err,result)=>{
            if (err) throw err
            res.send(result)
        })
    })
})
app.delete('/delete/:id',(req,res)=>{
   var id=req.params.id;
    var sql=`delete from crudpost  where id='${id}'`;
con.query(sql,function(err,result){
    if (err) throw err;
    res.send(result);
})

})
app.put('/update/:id',(req,res)=>{
    var id=req.params.id;

    var name=req.body.name;
    var email=req.body.email;
    var password=req.body.password;
    var sql=`UPDATE crudpost set name='${name}',email='${email}',password='${password}' where id='${id}'`;
con.query(sql,(err,results)=>{
    if (err) throw err;
    res.send(results)
})
}),
 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))