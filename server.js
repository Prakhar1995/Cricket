var express = require('express');
const mongojs = require('mongojs')
const db = mongojs('match', ['match'])
 var cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/',express.static(__dirname));


app.get("/stats",(req,res)=>
{
   console.log("he");
db.match.find(function (err, docs) {
 console.log(docs)
res.send(docs)
// docs is an array of all the documents in mycollection
})// load the index.ejs file

});

app.listen(3001, () => console.log(`Express server running on port 3001`));