try:
    import os
    import subprocess
except ImportError as e:
    print("Error importing packages: " + e)




def main():
    # create directories structure
    os.system("mkdir bin views public routes")
    os.system(r"mkdir public\images public\javascripts public\stylesheets")
    os.system(r"type nul > bin/www")
    os.system(r"type nul > public/stylesheets/style.css")
    os.system(r"type nul > routes/index.js")
    os.system(r"type nul > routes/users.js")
    os.system(r"type nul > views/error.ejs")
    os.system(r"type nul > views/index.ejs")
    os.system(r"type nul > app.js")
    #write to files 
    f = open("bin/www", "w")
    f.write("""#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('template:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '80');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

    """)

    f = open("app.js", "w")
    f.write("""var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

    """)

    f = open("views/index.ejs", "w")
    f.write("""<!DOCTYPE html>
<html>
  <head>
    <title>Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1>Welcome to the Node.js, Express template</h1>
  </body>
</html>
    """)
    f = open("views/error.ejs", "w")
    f.write("""<h1><%= message %></h1>
<h2><%= error.status %></h2>
<pre><%= error.stack %></pre>
    """)
    f = open("routes/index.js", "w")
    f.write("""var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
    """)
    f = open("routes/users.js", "w")
    f.write("""var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
    """)
    f = open("public/stylesheets/style.css", "w")
    f.write("""* {
      font-family: 'Arial', sans-serif;
      margin: 0;
}""")

    # initialise npm and install packages
    os.system(r"npm init")
    os.system(r"npm install cookie-parser debug ejs express http-errors morgan --save")



if __name__ == "__main__":
    main() # run the main function