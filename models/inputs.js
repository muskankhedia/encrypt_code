const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const InputsSchema = new Schema({
    input:{
        type:String
    },
    e_data:{
        type:String
    }

});

mongoose.model('inputs',InputsSchema);