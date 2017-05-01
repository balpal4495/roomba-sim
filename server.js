const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3000);
app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => res.sendFile(path.join(`${__dirname}/index.html`)));
app.get('/table', (req, res) => res.sendFile(path.join(`${__dirname}/table.html`)));
// Listen for requests
const server = app.listen(app.get('port'), () => {
  const port = server.address().port;
  console.log(`Server listening on ${port}`);
});