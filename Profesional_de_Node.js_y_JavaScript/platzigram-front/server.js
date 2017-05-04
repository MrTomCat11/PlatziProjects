var express = require('express');
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
    console.log(file.originalname)
  }
})
var upload = multer({ storage: storage }).single('picture');

var app = express();

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