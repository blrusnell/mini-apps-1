const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded());


// allows access to client folder
app.use(express.static('client'));


// recieve post request from client
app.post('/upload_json', (req, res) => {
    let parsedData = JSON.parse(req.body);
    res.json(parsedData);

    res.end();
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

