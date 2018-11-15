const fs = require('fs');

const lines = fs.readFileSync('data-full.csv').toString().split("\n"); // Read CSV
const linesAsArray = lines.map(x => x.split(',')) // Turn each line to an array of values


const questionObjects = linesAsArray.map( x => {
    return {
        Q1: x[0],
        Q2: x[1],
        Q3: x[2],
        Q4: x[3],
        Q5: x[4],
        Q6: x[5],
    }
}) // Turn each array to an object with properties Q1, Q2, Q3, ...

// 1 - Devide into 2 Groups : Eng vs NonEng
let EngResponses = questionObjects.filter(x => x.Q1 === 'Engineering and Computer Science')
let NonEngResponses = questionObjects.filter(x => x.Q1 !== 'Engineering and Computer Science')

// 2- Count each response values

//      2 - A - For Eng
let EngResponsesCounted = {}

for (let i = 0; i < EngResponses.length; i++) {
    const entry = EngResponses[i]

    for(let Q in entry){ // Generates indexes Q1, Q2, Q3 ...
        const response = entry[Q]
        EngResponsesCounted[Q] = EngResponsesCounted[Q] || {} // Initialize if needed
        EngResponsesCounted[Q][response] = EngResponsesCounted[Q][response] || [] // Initialize if needed
        const sum = EngResponsesCounted[Q][response] | 0 // 
        EngResponsesCounted[Q][response] = sum+1
    }
}

//      2 - B - For Non Eng
let NonEngResponsesCounted = {}

for (let i = 0; i < NonEngResponses.length; i++) {
    const entry = NonEngResponses[i]

    for(let Q in entry){ // Generates indexes Q1, Q2, Q3 ...
        let response = entry[Q]
        NonEngResponsesCounted[Q] = NonEngResponsesCounted[Q] || {} // Initialize if needed
        NonEngResponsesCounted[Q][response] = NonEngResponsesCounted[Q][response] || [] // Initialize if needed
        const sum = NonEngResponsesCounted[Q][response] | 0 // 
        NonEngResponsesCounted[Q][response] = sum+1
    }
}

console.log({EngResponsesCounted, NonEngResponsesCounted})
