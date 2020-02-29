// Your code here
function mapToNegativize(sourceArray) {
  let arr = [];
  sourceArray.forEach(num => {
    arr.push(num * -1);
  });
  return arr;
}

function mapToNoChange(sourceArray) {
  let arr = [];
  sourceArray.forEach(string => {
    arr.push(string);
  });
  return arr;
}

function mapToDouble(sourceArray) {
  let arr = [];
  sourceArray.forEach(num => {
    arr.push(num * 2);
  });
  return arr;
}

function mapToSquare(sourceArray) {
  let arr = [];
  sourceArray.forEach(num => {
    arr.push(num ** 2);
  });
  return arr;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let start = startingPoint;
  sourceArray.forEach(num => {
    start += num;
  });
  return start;
}

function reduceToAllTrue(sourceArray) {
  let arr = [];
  sourceArray.forEach(elmt => {
    arr.push(!!elmt);
  });
  return !arr.includes(false) ? true : false;
}

function reduceToAnyTrue(sourceArray) {
  let arr = [];
  sourceArray.forEach(elmt => {
    arr.push(!!elmt);
  });
  return arr.includes(true) ? true : false;
}
