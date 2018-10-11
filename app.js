const http = require('http');
const fs = require('fs');
const firebase = require("firebase");

const hostname = '127.0.0.1';
const port = 3000;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA62i15PSujBSWoFyl_tPaVU0DRqO8sNGQ",
  authDomain: "hesiod-financial.firebaseapp.com",
  databaseURL: "https://hesiod-financial.firebaseio.com",
  sstorageBucket: "hesiod-financial.appspot.com",
};
firebase.initializeApp(config);
// Get a reference to the database service
var database = firebase.database();

/*fs.readFile('index.html', (err, html) => {
  if(err){
    throw err;
  }

  const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(html);
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log('Server started on port ' + port);
  });
});*/
