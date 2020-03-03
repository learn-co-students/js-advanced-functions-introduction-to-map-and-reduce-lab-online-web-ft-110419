function mapToNegativize(sourceArray){
    let negArray = sourceArray.map(value => -value)
    return negArray;
};

function mapToNoChange(sourceArray){
    return sourceArray
};

function mapToDouble(sourceArray){
    let doubleArray = sourceArray.map(value => value * 2)
    return doubleArray
};

function mapToSquare(sourceArray){
    let square = sourceArray.map(value => value * value)
    return square 
};

function reduceToTotal(sourceArray, startingPoint = 0){
    const reducer = function(accumulator, currentValue){ return accumulator + currentValue }

    return sourceArray.reduce(reducer, startingPoint)
};

function reduceToAllTrue(sourceArray){

    const reducer = function(accumulator, currentValue){  
        if(!!accumulator == true && !!currentValue == true){
            return true;
        } else {
            return false;
        }
    }
    return sourceArray.reduce(reducer)
}; 

function reduceToAnyTrue(sourceArray){
    const reducer = function(accumulator, currentValue){  
        if(accumulator == true){
            return true
        } else {
            return !!currentValue
        } 
    }
    return sourceArray.reduce(reducer)
}





