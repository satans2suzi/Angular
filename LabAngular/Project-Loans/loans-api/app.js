var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
var cors = require('cors')
//#########____connect Mongoose_____#########
var mongoose = require("mongoose")
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
  if(err){
    console.log("Mongo connect error:" + err)
  }else{
    console.log("Mongo connected successful.")
  }
});
//#########____End connect Mongoose_____#########

//#########____Setting Route_____#########
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var settingRouter = require('./routes/setting');
var documentRouter = require('./routes/documentary.route');
//#########____Setting Route_____#########




var app = express();


//#########____Body Parser_____##########
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//#########____End Body Parser_____##########

app.use((req,res,next) =>{
  // res.setHeader('Accept-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Accept-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS,PATCH');
  // res.setHeader('Accept-Control-Allow-Hearders', 'X-Requested-With,content-type');
  res.setHeader('Accept-Control-Allow-Credentials', true);
  next();
})


app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/documentary', documentRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
