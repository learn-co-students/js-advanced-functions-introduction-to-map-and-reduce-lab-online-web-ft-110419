//  mapToNegativize returns an array with all values made negative
function mapToNegativize(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(arr[i] * -1);
    }
    return result;
}
//  mapToNoChange returns an array with the original values
function mapToNoChange(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;   
}
//  mapToDouble returns an array with the original values multiplied by 2
function mapToDouble(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}
//  mapToSquare returns an array with the original values squared
function mapToSquare(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]* arr[i]);
    }
    return result;
}
//  reduceToTotal returns a running total when not given a starting point
//  reduceToTotal returns a running total when given a starting point
function reduceToTotal(arr, start=0){
    let total = start;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}
//  reduceToAllTrue returns true when all values are truthy
//  reduceToAllTrue returns false when any value is falsy
function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) return false;
    }
    return true;
}
//  reduceToAnyTrue returns true when a true value is present
//  reduceToAnyTrue returns false when no true value is present
function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) return true;
    }
    return false;
}