var express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');

var router = express.Router();

mongoose.connect('mongodb://localhost:27017/tudorflix', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
  console.log('connected to database on mongodb://localhost:27017/tudorflix')
})

// API Request Default Settings
var base_path = 'https://api.themoviedb.org/3';

// database schemas
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

async function get(paths){
  var returnData = {'data': []}
  for(var x = 0; x < paths.length; x++){
    await axios.get(`${base_path}${paths[x]}`)
    .then(resp => {
      returnData.data.push(resp.data);
      
    })
    .catch(err => {
      console.error(err);
    })
  }

  return returnData;
}

const GetAPI = async (paths, res) => {

  var returnAPI = await get(paths);
  res.json(returnAPI);
  res.end();
}

/* GET users listing. */
router.get('/user/', function(req, res, next) {
});

router.get('/home/', function(req, res, next){
  paths = ['/movie/now_playing?api_key=7c564bf98c4e72a69dbe7ed063ae47dc&language=en-US&page=1&region=gb', '/trending/movie/day?api_key=7c564bf98c4e72a69dbe7ed063ae47dc']
  GetAPI(paths, res);
});

router.get('/movie/', function(req, res, next){
  console.log(`id: ${req.query.id}`);
  paths = [`/movie/${req.query.id}?api_key=7c564bf98c4e72a69dbe7ed063ae47dc&language=en-US`]
  GetAPI(paths, res);
})

router.post('/signin/', function(req, res, next){
  const currentUsers = User.find({username: req.body.username}, function (err, foundUsernames){
    if(!err){
      if(foundUsernames.length === 1){
        if(foundUsernames[0].password === req.body.password){
          res.json({'message': 'success'});
          res.end();
        }else{
          res.json({'message': 'error'});
          res.end();
        }
      }else{
        res.json({'message': 'error'});
        res.end();
      }
    }else{
      res.json({'message': err})
      res.end();
    }
  });
})

router.post('/signup/', function(req, res, next){
  const currentUsers = User.find({username: req.body.username}, function (err, foundUsernames){
    if(!err){
     if(foundUsernames.length === 0){
        const NewUser = new User({username: req.body.username, password: req.body.password}).save(function (err, user){
          if(err){res.json({err: 'err'});res.end();}
          else{
            res.json(user);
            res.end();
          }
        });
     }
     else{
       res.json({'err': 'hmmm... it seems as though the username already exists, forgot your password?'});
       res.end();
     }
    }
  })
})

module.exports = router;