var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');


var indexRouter = require('./src/routes/index');
var userRouter = require('./src/routes/userRoutes');
var playerRouter = require('./src/routes/playerRoutes');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var cors = require('cors')

app.use(cors({
  origin: '*'
}))

app.use('/', indexRouter);
app.use('/users', userRouter);

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


app.listen(8000, () => console.log("Express has started on port 8000"));

// console.log("Express has started on port 3000");

module.exports = app;
