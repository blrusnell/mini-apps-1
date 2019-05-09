const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;


// looks for html file
app.use(express.static('public'));


//****MiddleWare */
app.use(bodyParser.json());



//***Post Requests */
app.post('/', (req, res) => {
    console.log(req.body);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));


