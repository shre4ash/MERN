const fs = require('fs');

function kirataReadFile() {
    console.log("Inside a kiratsFile")
   var p = new Promise((resolve) => {
    console.log("inside Promise")
        fs.readFile("a.txt", "utf-8", function(err, data){
            console.log("before resolve");
            resolve(data)
        });
    })
    return p;
}

function onDone(data) {
    console.log(data)
}

var a = kirataReadFile();
console.log(a);
a.then(onDone)