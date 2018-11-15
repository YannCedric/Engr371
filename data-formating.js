var fs = require('fs');
let array = fs.readFileSync('data.txt').toString().split("\n");
let temp = []
let resp = []
// array[i],' - ',
// array[i],' - ',
for(let i=0; i<array.length; i++){
    if(array[i].includes('Q'))
        if(array[i+2].includes('Other') && !array[i+3].includes('Q'))
            temp.push(array[i+3])
        else
            temp.push(array[i+2])
    
    if(array[i].includes('Q6')){
        resp.push(temp)
        temp = []

    }
}

let paste = resp.map(x=>x[5])
paste.forEach(element => {
    console.log(element)
});