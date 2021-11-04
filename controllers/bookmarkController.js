const express = require('express');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var  Bookmark  = require('../models/bookmark');


// get bookmarks list

router.get('/', (req, res) => {
    Bookmark.find((err, docs) => {
        if (!err) {res.send(docs);  }
        else {console.log('Error to retrive bookmarks :' + JSON.stringify(err, undefined, 2)); }
   });

});
///////  end getting bookmarks list


// add bookmark 
router.post('/', (req, res) =>{

   var emp = new Bookmark({
      videolink: req.body.link
      
   });
   emp.save((err, doc) => {
      if (!err) {res.send(doc);  }
        else {console.log('Error to add link :' + JSON.stringify(err, undefined, 2)); }
   });
});
// end add 





module.exports = router;