const {Q1, Q2, Q3, Q4, Q5, Q6} = require('./Questions')

function TotalMaps (lines) {

let map = {}
let map2 = {}
let map3 = {}
let map4 = {}
let map5 = {}
let map6 = {}


for (let i = 0; i < lines.length; i++) {
    const element = lines[i];
        let item = element[0];
        let num = map[item] | 0
        map[item] = num + 1

        item = element[1];
        num = map2[item] | 0
        map2[item] = num + 1

        item = element[2];
        num = map3[item] | 0
        map3[item] = num + 1

        item = element[3];
        num = map4[item] | 0
        map4[item] = num + 1

        item = element[4];
        num = map5[item] | 0
        map5[item] = num + 1

        item = element[5];
        num = map6[item] | 0
        map6[item] = num + 1
    }

    let result = {}
    result[Q1] = map
    result[Q2] = map2
    result[Q3] = map3
    result[Q4] = map4
    result[Q5] = map5
    result[Q6] = map6

    return result

}

module.exports=TotalMaps;