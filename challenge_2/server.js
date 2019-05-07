const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// allows access to client folder
app.use(express.static('client'));



// POST AND GET REQUESTS

// recieve post request from client and send parsed data to new page
app.post('/upload_json', (req, res) => {
    let reportStringToObj = JSON.parse(req.body.data);
    let csv = csvHandler(reportStringToObj);
    console.log(csv);

    res.send(req.body);
});




const csvHandler = (dataObj) => {
    let string = "";
    for (let key in dataObj) {
        if (key !== "children") {
            string += dataObj[key] + ',';
        }
        if (key === "children") {
            for (let i of dataObj[key]) {
                string +=  `<br>` + csvHandler(i);
        }
    }
    }
    return string;
};



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

