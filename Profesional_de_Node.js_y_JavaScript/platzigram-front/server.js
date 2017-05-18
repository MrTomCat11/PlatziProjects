var express = require('express');
// var aws = require('aws-sdk')
var multer = require('multer');
// var multerS3 = require('multer-s3');
var ext = require('file-extension');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('passport');
var config = require('./config');
var port = process.env.PORT || 3000;

/* Almacenamiento de imagenes en AMAZON S3
var s3 = new aws.S3({
  accessKeyId: config.aws.accessKey
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
app.set(bodyParser.urlencoded({ extended: false }));
app.set(cookieParser());
app.use(expressSession({
  secret: config.secret,
  resave: false,
  saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Platzigram'});
})

app.get('/signup', function (req, res) {
  res.render('index', { title: 'Platzigram - Signup'});
})

app.get('/signin', function (req, res) {
  res.render('index', { title: 'Platzigram - Signin'});
})

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

app.post('/api/pictures', function (req, res){
  upload(req, res, function(err){
    if (err){
      return res.send(500, "Error uploading file");
    }
    res.send('File uploaded');
  })
})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Platzigram escuchando en el puerto 3000');
})
