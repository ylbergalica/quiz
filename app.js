var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/public',express.static(path.join(__dirname, 'public')));

/// USER

const webRouter=require('./routes/web/index')

app.use('/',webRouter)

/// ADMIN

const a_rout_categories = require('./routes/admin/admin')

app.use('/admin', a_rout_categories)

//////////////

const sequelize=require('./util/database')
sequelize.sync().then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
  })

app.listen("8080")

