const express = require("express");
const bodyParser=require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended: true}));
app.use('/resourses', express.static('/Kodo_namai/ProjektukasAukseiSavarankiskas/static'));

let db;


//anoniminė liambda funkcija  ()=>{} ======== function =>{}
app.listen(3000, ()=>{
    console.log("man pavyko")
}); 

MongoClient.connect("mongodb+srv://dbana:anadb@cluster0-gv7sk.mongodb.net/test?retryWrites=true",
(err, client)=>{
    if(err){
      return console.log(err)  
    } 
    db = client.db('Cluster0');
});


app.get('/', (req, res)=>{
    //res.sendFile("/Kodo_namai/ProjektukasAukseiSavarankiskas/static/index.html");
    db.collection('registration').find().toArray((err, result)=>{
        if(err){
            return console.log(err)
        }
            res.render('index.ejs', {registration: result})
            console.log("so done");
    })
});

app.post("/registration", (req, res)=>{
    db.collection('registration').insertOne(req.body, (err, result)=>{
        if(err){
            return console.log(err)
        }
            console.log('issaugota duombazeje')
            res.redirect('/')
   })
});

app.set('view engine', 'ejs')



//reminder
//you need nodejs
//to run javascript inside a terminal
//and not a browser
