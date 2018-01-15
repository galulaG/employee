const mongoose = require("mongoose");

mongoose.connect("mongodb://student:abc123@ds255787.mlab.com:55787/heroku_d869qk08", { useMongoclient : true });

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name :  String,
    address : String,
    phoneNumber : String,
    salary : Number,
    profile : String
});

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;