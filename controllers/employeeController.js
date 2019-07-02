const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
    res.render('employee/addedit', {
        viewTitle: " Insert Employees"
    });
});
router.post('/', (req, res) => {
    if(req.body._id =='')
    insertRecord(req, res);
    else
    updateRecord(req, res);
});
function insertRecord(req, res) {
    const employee = new Employee();
    employee.fullname = req.body.fullname;
    employee.phone = req.body.phone;
    employee.city = req.body.city;
    employee.trade = req.body.trade;
    employee.save((err, doc) => {
        if (!err) {
            res.redirect('employee/list');

        }
        else {
            console.log("error during record insertion :" + err);

        }
    });

}
function  updateRecord(req, res){
    Employee.findOneAndUpdate({ _id: req.body._id}, req.body, {new :true}, (err, doc)=>{
        if (!err) {
            res.redirect('employee/list');
        }
        else 
        console.log("error in update " +err);
    });
}

router.get('/list', (req, res) => {
  

    Employee.find((err, docs) =>{ 
        if(!err){
            res.render('employee/list',{
                list:docs
            });
        }

    });
});


router.get('/:id', (req,res) =>{
    Employee.findById(req.params.id ,(err, doc) => {
        if(!err){
            res.render("employee/addedit",{
                viewTitle:"Update Employee",
                employee:doc
            });
        }
    });
});
router.get('/delete/:id', (req,res) => {
    Employee.findByIdAndRemove(req.params.id, (err, doc) =>{
        if (!err) {
            res.redirect('/employee/list');
        }
    });
});

module.exports = router;
