const express = require('express');
const bodyParser = require('body-parser');
const cookieParser =  require('cookie-parser');
//const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
//const flash = require('connect-flash');
const session = require('express-session');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(require('morgan')('combined'));

app.use(session({
    secret: 'secret', //change this to some long string
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

require('./models/db.js');

app.set('view engine', 'ejs');
app.use(express.static('lifeclock'));

const router = require('./routes/routes.js');
app.use(router);

app.listen(PORT, function(){ console.log(`Express listening on port ${PORT}`); });
