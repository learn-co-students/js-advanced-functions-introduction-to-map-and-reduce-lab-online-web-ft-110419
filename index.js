function mapToNegativize(array) {
    let newArray = []
    array.forEach(element => {
        newArray.push(0 - element)
    })
    return newArray
}

function mapToNoChange(array) {
    let newArray = []
    array.forEach(element => {
        newArray.push(element)
    })
    return newArray
}

function mapToDouble(array) {
    let newArray = []
    array.forEach(element => {
        newArray.push(element * 2)
    })
    return newArray
}

function mapToSquare(array) {
    let newArray = []
    array.forEach(element => {
        newArray.push(element * element)
    })
    return newArray
}

function reduceToTotal(array, start=0) {
    let value = start
    array.forEach(num => {
        value = value + num
    })
    return value
}

function reduceToAllTrue(array) {
    let value = true
    array.forEach(element => {
        if (element === false)
        value = false
    })
    return value
}

function reduceToAnyTrue(array) {
    let value = false
    array.forEach(element => {
        if (element === true)
        value = true
    })
    return value
}