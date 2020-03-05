function mapToNegativize(array) {
    return array.map( elem => elem * -1 )
}

function mapToNoChange(array) {
    return array.map( elem => elem )
}

function mapToDouble(array) {
    return array.map( elem => elem * 2 )
}

function mapToSquare(array) {
    return array.map( elem => elem ** 2 )
}

function reduceToTotal(array, init = 0) {
    const sumToTotal = (total, num) => total + num
    const total = array.reduce(sumToTotal, init)
    return total
}

function reduceToAllTrue(array) {
    let reduce = array.filter( elem => !!elem )
    return array.length === reduce.length ? true : false
}

function reduceToAnyTrue(array) {
    let val = array.find(elem => !!elem)
    return val ? true : false
}