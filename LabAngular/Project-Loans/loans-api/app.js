var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
var cors = require('cors')
var routeAPI = require('./routes/index.router')
var mongoose = require("mongoose")

//#########____connect Mongoose_____#########

mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, function (err) {
    if (err) {
        console.log("Mongo connect error:" + err)
    } else {
        console.log("Mongo connected successful.")
    }
});
//#########____End connect Mongoose_____#########




var app = express();


//#########____Body Parser_____##########
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//#########____End Body Parser_____##########

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS,PATCH');
    res.setHeader('Access-Control-Allow-Hearders', 'Origin, X-Custom-Header,Content-type,Request-Header, Response-Header');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Expose-Headers', 'Response-Header, Content-Range');
    next();
})
var corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true
};

app.use(cors(corsOptions));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//#########____Setting Route_____#########
routeAPI(app);
//#########____Setting Route_____#########

app.get('/', function (req, res, next) {
    return res.send('thai')
});



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;
