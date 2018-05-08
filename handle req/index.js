const express = require('express');

//setup express app
const app = express();

app.get('/api',function(req,res){
   console.log('GET request');
   res.send({name:'Rachana'});

});


//listen for requests
app.listen(process.env.port || 4000,function(){
  console.log('now listening for requests');

});