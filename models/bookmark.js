const mongoose = require('mongoose');

var bookmark = mongoose.model('bookmark', {

    videolink: {type: String}
    

});

module.exports =  bookmark; 