const mongoose = require ('mongoose');

require('./employee.model');


mongoose.connect('mongodb://localhost:27017/employeeDatabase',
 {useNewUrlParser:true},
  (err) =>{
    if(!err){ 
        console.log("connected")
    }
    else {
        console.log("Error in Database  connection:"+ err)
    }

});