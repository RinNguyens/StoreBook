const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 9001;
const Database = require('./config/db').Database;
const multer = require('multer');
var path = require('path');
const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const session = require('express-session');
var flash = require('express-flash');
const app = express();


mongoose.connect(Database)
.then(()=> {
    console.log('COnnect Database successfully');
})  
.catch((err) => {
    console.log(err);
});

// Use Package
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('layout','layouts/layout');

app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: '123456'
  }))
app.use(flash());
app.use(expressLayout);


const indexRouter = require('./routes/index'); // Index
const authorRouter = require('./routes/author'); // Author Router

app.use('/',indexRouter);
app.use('/author',authorRouter);


app.listen(PORT ,()=> {
    console.log('Hello PORT ',PORT);
})