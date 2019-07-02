const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    fullname: {
        type: String,
    },
    phone: {
        type: Number
    },
    city: {
        type: String
    },
    trade: {
        type: String
    }
});
mongoose.model('Employee',employeeSchema);