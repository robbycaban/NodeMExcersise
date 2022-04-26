// domain IP addess formula - code 

const DNS = require('dns')
const fs = require('fs')
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("Domain Name: ", function (url) {
    readline.close();
    DNS.lookup(url, function (err, add) {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log("IP Address: ", add);
    })
});
// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     if(err) {
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// });
// const content = "And I rule the World"
// fs.writeFile('file.txt', content, err =>{
//     if(err) {
//         console.error(err)
//     }
// })

