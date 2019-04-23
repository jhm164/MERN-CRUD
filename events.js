const events=require('events');
const fs = require('fs');

const event= new events.EventEmitter();

event.on('called',()=>{
fs.readFile('data.txt',(err,data)=>{
    console.log('hey event called'+data.toString())
});

});



event.emit('called')

