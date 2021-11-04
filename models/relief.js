const mongoose = require('mongoose');

var Relief = mongoose.model('Relieef', {

    videolink: {type: String}
    

});

module.exports =  Relief; 