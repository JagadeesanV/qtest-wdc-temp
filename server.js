const express = require('express');

const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
})

app.post('/', function (req, res) {
    res.render('index');
    console.log(req.body.projectid);
    tableau.connectionName = "USGS Earthquate Feed";
    tableau.submit()
    console.log('Submitted');
})

app.listen(port, function () {
    console.log(`Example app listening at http://localhost:${port}`)
})
