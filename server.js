var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool=require('pg').pool;
var config= {
    user:'msvm06',
    database: 'msvm06',
    host:'db.imad.nasura-app.io',
    port:'5432',
    Password:process.env.DB_PASSSWORD
};

var pool=new Pool(config);
app.get('/test-db',function(req,res){
    //make 
    //return
    
pool.query('SELECT* FROM test', function(err,result){
    if (err)
    {
        res.status(500).send (err.toString());
    }else{res.send(JSON.stringify( result));
}
});
});

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'uiarticle-one.html'));
});

app.get('/article-two', function (req, res) {
  res.send ('Article two requested and will be served here');
});

app.get('/article-three', function (req, res) {
  res.send ('Article three requested and will be served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/test-db',function(req,res){
    
    //make a select request
    //return a response with the result
    
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
