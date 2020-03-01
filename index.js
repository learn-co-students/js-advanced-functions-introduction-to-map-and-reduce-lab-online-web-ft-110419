// Your code here
function mapToNegativize(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(-1 * arr[i]);
    }
    return newArr;
}

function mapToNoChange(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

function mapToDouble(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

function mapToSquare(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i] ** 2);
    }
    return newArr;
}

function reduceToTotal(arr, start=0){
    let x = start;
    for (let i = 0; i < arr.length; i++){
        x = x + arr[i];
    }
    return x;
}

function reduceToAllTrue(arr){
    for (let i = 0; i < arr.length; i++){
        if (!arr[i]) return false;
    }
    return true;
};

function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }