const express = require('express');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var  Relief  = require('../models/relief');


// get employees list
// localhost:3000/employees/
router.get('/', (req, res) => {
   Relief.find((err, docs) => {
        if (!err) {res.send(docs);  }
        else {console.log('Error to retrive employees :' + JSON.stringify(err, undefined, 2)); }
   });

});
///////  end getting employees list

// get by id 
router.get('/:id', (req, res) =>{
   if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`no record with given id : ${req.params.id}`);

      Relief.findById(req.params.id, (err, doc) => {
      if (!err) {res.send(doc);  }
        else {console.log('Error to retrive employees :' + JSON.stringify(err, undefined, 2)); }

   }) ;  

});

// end get by id

// add employee 
router.post('/', (req, res) =>{

   var emp = new Relief({
      videolink: req.body.link
      
   });
   emp.save((err, doc) => {
      if (!err) {res.send(doc);  }
        else {console.log('Error to add link :' + JSON.stringify(err, undefined, 2)); }
   });
});
// end add 

// update employee
router.put('/:id', (req, res) =>{
   if (!ObjectId.isValid(req.params.id))
       return res.status(400).send(`no record with given id : ${req.params.id}`);
   var emp = {
      videolink: req.body.name
   };
   Relief.findByIdAndUpdate(req.params.id, { $set: emp}, {new: true}, (err, doc) =>{
      if (!err) {res.send(doc);  }
      else {console.log('Error to update employee :' + JSON.stringify(err, undefined, 2)); }

   });

});
//  end update 

router.delete('/:id', (req, res)=>{
   if (!ObjectId.isValid(req.params.id))
       return res.status(400).send(`no record with given id : ${req.params.id}`);


       Relief.findByIdAndRemove(req.params.id, (err, doc)=>{
      if (!err) {res.send(doc);  }
      else {console.log('Error to delete employee :' + JSON.stringify(err, undefined, 2)); }
   }) ;   

});
/////// end delete

module.exports = router;