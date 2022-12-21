var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/hello", function(req, res) {
  res.json({ greeting: 'hello GET{JSON}' });
});

app.get("/api/whoami", function(req, res) {
  //working on it   
  res.json({ 
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.get('User-Agent')
  });
  
});

if(require.main === module ) {

  app.listen(port, 
      () => 
          console.log( `Express started on http://localhost:${port}` +
          '; press Ctrl-C to terminate.')
  );
  
  } else {
      module.exports = app
  }

  /**
   * 
   A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.
   A request to /api/whoami should return a JSON object with your preferred language in the language key.
   A request to /api/whoami should return a JSON object with your software in the software key.
   */
