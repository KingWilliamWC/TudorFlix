var express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');

var router = express.Router();

mongoose.connect('mongodb://localhost:27017/tudorflix', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
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
  genres: Array,
  includeadult: Boolean,
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

router.post('/updateaccount', function(req, res, next){
  console.log(req.body.saveData);
  User.findByIdAndUpdate({_id: req.body.saveData._id}, {username: req.body.saveData.username, password: req.body.saveData.password, genres: req.body.saveData.genres, includeadult: req.body.saveData.includeadult}, {upsert: true}, function (err, newUser){
    if(!err){
      res.json(newUser);
    }else{
      console.log(err);
      res.json({'status': 'failure','message': err});
    }
  })
  // res.json({'status': 'success'});
  // res.end();
})

router.post('/home/', function(req, res, next){
  var genres = req.body.genres.join()
  paths = ['/movie/now_playing?api_key=7c564bf98c4e72a69dbe7ed063ae47dc&language=en-US&page=1&region=gb', '/trending/movie/day?api_key=7c564bf98c4e72a69dbe7ed063ae47dc', `/discover/movie?api_key=7c564bf98c4e72a69dbe7ed063ae47dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genres}&with_watch_monetization_types=flatrate`]
  GetAPI(paths, res);
});

router.get('/movie/', function(req, res, next){
  paths = [`/movie/${req.query.id}?api_key=7c564bf98c4e72a69dbe7ed063ae47dc&language=en-US`]
  GetAPI(paths, res);
})

router.post('/signin/', function(req, res, next){
  User.find({username: req.body.username}, function (err, foundUsernames){
    if(!err){
      if(foundUsernames.length === 1){
        if(foundUsernames[0].password === req.body.password){
          res.json({'status': 'success','message': 'user_successful', 'user': foundUsernames[0]});
          res.end();
        }else{
          res.json({'status': 'failure', 'message': 'error'});
          res.end();
        }
      }else{
        res.json({'status': 'failure','message': 'no_user'});
        res.end();
      }
    }else{
      res.json({'message': err})
      res.end();
    }
  });
})

router.post('/isUser', function(req, res, next){
  User.find({username: req.body.username.toString()}, function (err, foundUsernames){
    if(!err){
      if(foundUsernames.length !== 0){
        res.json({'message': 'user_already_exists'});
      }else{
        res.json({'message': 'user_new'})
      }
    }else{
      res.json({'err': err});
    }

  })
})

router.post('/signup/', function(req, res, next){
  const currentUsers = User.find({username: req.body.username}, function (err, foundUsernames){
    if(!err){
     if(foundUsernames.length === 0){
        const NewUser = new User({username: req.body.username, password: req.body.password, genres: req.body.genres, includeadult: true}).save(function (err, user){
          if(err){res.json({err: 'err'});res.end();}
          else{
            res.json({status: 'success', 'user': user});
            res.end();
          }
        });
     }
     else{
       res.end();
     }
    }
  })
})

module.exports = router;