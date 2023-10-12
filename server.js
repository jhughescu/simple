const express = require('express');
const exphbs = require('express-handlebars');
const http = require('http');
const socketIO = require('socket.io');
const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const port = process.env.PORT || 3001;
const server = http.createServer(app);
const io = socketIO(server);

app.get("/", (req, res) => res.type('html').send(html));

//const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Me!</title>
  </head>
  <body>
    <section>
      Hello from Me
    </section>
  </body>
</html>
`

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
//    initApp();
});
