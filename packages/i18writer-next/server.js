// const https = require('https');
// const http = require('http');
const fs = require('fs');
const { parse } = require("url");
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: __dirname })
const handle = app.getRequestHandler()

const server = require('@httptoolkit/httpolyglot');

const options = {
  key: fs.readFileSync('localhost.key'),
  cert: fs.readFileSync('localhost.cert'),
};

app.prepare().then(() => {
  server.createServer(options, (req, res) => {
    if (!req.socket.encrypted) {
      res.writeHead(301, { "Location":`https://${req.headers.host}${req.url}`});
      return res.end();
    }
    const parsedUrl = parse(req.url, true);
    return handle(req, res, parsedUrl);
    // handle ....
  }).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on localhost:${port}`)
  })
})
