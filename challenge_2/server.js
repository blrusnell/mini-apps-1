const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


app.use(bodyParser());
// app.use(bodyParser.urlencoded({extended: true}));


// allows access to client folder
app.use(express.static('client'));



// POST AND GET REQUESTS

// recieve post request from client and send parsed data to new page
app.post('/upload_json', (req, res) => {
    console.log(req.body);
    // let csv = csvHandeler(req.body);
    // console.log(csv);
    res.send(req.body);
});



// change affect post request data
// const csvHandeler = (obj) => {
//   return JSON.stringify(obj);
// };


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

