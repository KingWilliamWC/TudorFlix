const https = require('https');

var base_path = 'https://api.themoviedb.org/3';

var handler = function(resp){
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        var ReturnJSON = JSON.parse(data)
        console.log(ReturnJSON);
    })
  
    .on("error", (err) => {
    console.log("Error: " + err.message);
    })
}

// var pathstorequest = ['/movie/now_playing?api_key=7c564bf98c4e72a69dbe7ed063ae47dc&language=en-US&page=1&region=gb']

// for(var x = 0; x < pathstorequest.length; x++){
//     var requestdata = https.request(base_path + pathstorequest[x], callback).end();
//     data.data.push(requestdata);
// }

https.get(`${base_path}/movie/now_playing?api_key=7c564bf98c4e72a69dbe7ed063ae47dc&language=en-US&page=1&region=gb`, handler)