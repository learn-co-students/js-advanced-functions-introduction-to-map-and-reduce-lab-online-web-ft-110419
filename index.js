// Your code here
function mapToNegativize(array) {
    let a = []
    for (let i = 0; i < array.length; i++ ) {
      a.push(-1 * array[i]) // Unique work
    }
    return a
}
// function mapToNegativize(array){
//     return array.map(element => element * -1);
// } 
function mapToNoChange(array) {
    let a = []
    for (let i = 0; i < array.length; i++ ) {
      a.push(array[i]) // Unique work
    }
    return a
}
// function mapToNoChange(array){
//     return array;
// }
function mapToDouble(array) {
    let a = []
    for (let i = 0; i < array.length; i++ ) {
      a.push(2 * array[i]) // Unique work
    }
    return a
}
// function mapToDouble(array){
//     return array.map(element => element * 2);
// }
function mapToSquare(array) {
    let a = []
    for (let i = 0; i < array.length; i++ ) {
      a.push(array[i] * array[i]) // Unique work
    }
    return a
}
// function mapToSquare(array){
//     return array.map(element => element ** 2);
// }
function reduceToTotal(array, int=0) {
    for (let i = 0; i < array.length; i++){
        int+= array[i]
    }
    return int
}

function reduceToAllTrue(array){
    for (let i = 0; i < array.length; i++){
        if (!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array){
    for (let i = 0; i < array.length; i++){
        if (array[i]) return true
    }
    return false
}