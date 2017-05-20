var express = require('express');
// var aws = require('aws-sdk')
var multer = require('multer');
// var multerS3 = require('multer-s3');
var ext = require('file-extension');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('passport');
var platzigram = require('platzigram-client');
var auth = require('./auth');

var config = require('./config');
var port = process.env.PORT || 5050;

var client = platzigram.createClient(config.client);

/* Almacenamiento de imagenes en AMAZON S3
var s3 = new aws.S3({
  accessKeyId: config.aws.accessKey
  secretAccessKey: config.aws.secretKey
});

var storage = multerS3({
  s3: s3,
  bucket: 'platzigram',
  acl: 'public-read',
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname })
  },
  key: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
});
*/

// *** Arreglar con Amazon S3!! ***
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
    console.log(file.originalname)
  }
})
// *** Arreglar con Amazon S3!! ***

var upload = multer({ storage: storage }).single('picture');

var app = express();

app.set(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
  secret: config.secret,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Motor de render en el servidor
app.set('view engine', 'pug');

// Contenido estatico publico para el usuario
app.use(express.static('public'));

passport.use(auth.localStrategy);
passport.use(auth.facebookStrategy);
passport.deserializeUser(auth.deserializeUser);
passport.serializeUser(auth.serializeUser);

// v v v v v Definición de rutas v v v v v
app.get('/', function (req, res) {
  res.render('index', { title: 'Platzigram'});
})

app.get('/signup', function (req, res) {
  res.render('index', { title: 'Platzigram - Signup'});
})

app.post('/signup', function (req, res) {
  var user = req.body;
  client.saveUser(user, function (err, usr) {
    if (err) return res.status(500).send(err.message);

    res.redirect('/signin');
  })
})

app.get('/signin', function (req, res) {
  res.render('index', { title: 'Platzigram - Signin'});
})

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/signin'
}));

app.get('/logout', function (req, res) {
  req.logout();

  res.redirect('/');
})

app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }))

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/signin'
}))

function ensureAuth (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.status(401).send({ error: 'not authenticated' })
}

app.get('/whoami', function (req, res) {
  if (req.isAuthenticated()) {
    return res.json(req.user);
  }

  res.json({ auth: false })
});

app.get('/api/pictures', function (req, res, next) {

  var pictures = [
   {
     user:{
       username: 'mrtomcat11',
       avatar: 'https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/15740961_151129478706735_2819762631189393122_n.jpg?oh=fd82f23fc5e623afc013cd1a1abb76c2&oe=59823283'
     },
     url: 'http://materializecss.com/images/office.jpg',
     likes: 0,
     liked: false,
     createdAt: new Date().getTime()
   },
   {
     user:{
       username: 'mrtomcat11',
       avatar: 'https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/15740961_151129478706735_2819762631189393122_n.jpg?oh=fd82f23fc5e623afc013cd1a1abb76c2&oe=59823283'
     },
     url: 'http://materializecss.com/images/office.jpg',
     likes: 1,
     liked: true,
     createdAt: new Date().setDate(new Date().getDate() - 10)
   }
  ];

  setTimeout(function () {
    res.send(pictures);
  }, 2000)
});

app.post('/api/pictures', ensureAuth, function (req, res){
  upload(req, res, function(err){
    if (err){
      return res.status(500).send(`Error uploading file ${err.message}`);
    }

    res.send(`File uploaded ${req.file.location}`);
  })
})

app.listen(port, function (err) {
  if (err) {
    console.log('Hubo un error')
    process.exit(1);
  }

  console.log(`Platzigram escuchando en el puerto ${port}`);
})
