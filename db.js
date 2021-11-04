const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/CrudDB', { useNewUrlParser: true, useUnifiedTopology:true },  (err)=>{

 if (!err)
 console.log('MongoDb connection succeeded');

 else
 console.log('MongoDb connection failed' + JSON.stringify(err, undefined, 2));

});

module.exports = mongoose;