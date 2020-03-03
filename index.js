// Your code here

function mapToNegativize(array) {
    const negArray = [];
    for (let i = 0; i < array.length; i++) {
        negArray.push(array[i] * -1);
    }
    return negArray;
}

function mapToNoChange(array) {
    const newArray = [...array];
    return newArray;
}

function mapToDouble(array) {
    const doubleArray = [];
    for (let i = 0; i < array.length; i++) {
        doubleArray.push(array[i] * 2);    
    }
    return doubleArray;
}

function mapToSquare(array) {
    const squareArray = [];
    array.forEach(element => {
        squareArray.push(element ** 2);
    });
    return squareArray;
}

function reduceToTotal(array, memo=0) {
    let total = memo;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

function reduceToAllTrue(array) {
    let isTruthy = true;
    for (let i = 0; i < array.length; i++) {
        isTruthy = !!array[i];
        if (!isTruthy) {
            return isTruthy;
        };
    }
    return isTruthy;
}

function reduceToAnyTrue(array) {
    let isTruthy = false;
    for (let i = 0; i < array.length; i++) {
        isTruthy = !!array[i];
        if (isTruthy) {
            return isTruthy;
        }
    }
    return isTruthy
}