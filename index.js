// Your code here
const mapToNegativize = (sourceArray) => {
    const negArray = [];
    for(let x of sourceArray){
        negArray.push(x = x * -1)
    }
    return negArray
}

const mapToNoChange = (sourceArray) => {
    return sourceArray
}

const mapToDouble = (sourceArray) => {
    const doubleArray = [];
    for(let x of sourceArray){
        doubleArray.push(x = x * 2)
    }
    return doubleArray
}

const mapToSquare = (sourceArray) => {
    const squareArray = [];
    for(let x of sourceArray){
        squareArray.push(x = x**2)
    }
    return squareArray
}

const reduceToTotal = (sourceArray, startingPoint=0) => {
    let total = startingPoint
    for(let num of sourceArray){
        total = total + num
    }
    return total
}

const reduceToAllTrue = (sourceArray) => {
    let value = true
    for(let item of sourceArray){
        if (item === false){
            value = false
        }
    }
    return value
}

const reduceToAnyTrue = (sourceArray) => {
    let value = false
    for(let item of sourceArray){
        if (item === true){
            value = true
        }
    }
    return value
}
