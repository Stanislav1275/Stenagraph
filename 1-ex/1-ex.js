let l = console.log
//
// function StenoGraph(public, private){
//
// }
const fs = require("fs");
fs.readFileSync('./F1.txt', (e,d) =>{
    // if(e) throw e;
    l(d)
});
// console.log(1)