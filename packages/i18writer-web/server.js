const server = require('@httptoolkit/httpolyglot');
const fs = require('fs');
// const { parse } = require("url");
const { join } = require('path');
const { Server } = require('node-static');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const indexFile = 'index.html';

const options = {
  key: fs.readFileSync('localhost.key'),
  cert: fs.readFileSync('localhost.cert'),
};

const fileServer = new Server(join(__dirname, 'build'));

const log = function(request, response) {
  const d = new Date();
  const seconds = d.getSeconds() < 10? '0'+d.getSeconds() : d.getSeconds();
  const datestr = d.getHours() + ':' + d.getMinutes() + ':' + seconds;
  const line = datestr + ' [' + response.statusCode + ']: ' + request.url;
  console.log(line);
};

server.createServer(options, (req, res) => {
  if (!req.socket.encrypted) {
    console.log(`redirect ${req.url} to https`);
    res.writeHead(301, { "Location":`https://${req.headers.host}${req.url}`});
    return res.end();
  }
  // const parsedUrl = parse(req.url, true);
  //return fileServer.serve(req, res);
  
  const callback = function(e, rsp) {
    if (e && e.status === 404) {
      res.writeHead(e.status, e.headers);
      res.end("Not Found");
    }
    log(req, res);
  };
  
  if ( req.url.indexOf(".") == -1) {
    fileServer.serveFile(indexFile, 200, {}, req, res);
  } else {
    fileServer.serve(req, res, callback);
  }
}).listen(port, err => {
  if (err) throw err
  console.log(`> Ready on localhost:${port}`)
})
