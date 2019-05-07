const express = require('express');
const app = express();
const port = 3000;

// allows access to client folder
app.use(express.static('client'));

app.post('/upload_json', (req, res) => {
  res.send('hello');
});



//app.get('/', (req, res) => res.send(' World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

