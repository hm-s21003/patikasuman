const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
const fs = require('fs')
const path = require('path')
const { render } = require('ejs');


app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('top.ejs' ,{name:req.query.name})
})
app.listen(8080);