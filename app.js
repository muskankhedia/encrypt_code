
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//body Parser middleware
app.use(bodyParser.urlencoded({extended:false}) )
app.use(bodyParser.json())



app.set('port', process.env.PORT || 3000);

//Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//Connect to mongoose
mongoose.connect('mongodb://localhost/encrypt_code',{
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


//Load Input Model
require('./models/inputs');
const Input = mongoose.model('inputs');



app.set('veiw engine','html');
app.use(express.static(__dirname + "/public"));
//Index Route
app.get('/',(req,res) =>{
    res.sendFile(__dirname +"/views/index.html");
    console.log(req.body);
    

});


app.listen(app.get('port'),() => {
    console.log('Encryption App Running on Port:' , 3000);
})

