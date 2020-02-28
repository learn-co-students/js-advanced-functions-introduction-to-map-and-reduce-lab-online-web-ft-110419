function mapToNegativize(array) {
  let newArray = [];
  for (const element of array) {
    newArray.push(element * -1);
  }
  return newArray;
}

function mapToNoChange(array) {
  let newArray = array;
  return newArray;
}

function mapToDouble(array) {
  let newArray = [];
  for (const element of array) {
    newArray.push(element * 2);
  }
  return newArray;
}

function mapToSquare(array) {
  let newArray = [];
  for (const element of array) {
    newArray.push(element * element);
  }
  return newArray;
}

function reduceToTotal(array, start = 0) {
  let total = start;
  for (const element of array) {
    total += element;
  }
  return total;
}

function reduceToAllTrue(array) {
  for (const element of array) {
    if (!element) {
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(array) {
  for (const element of array) {
    if (element) {
      return true;
    }
  }
  return false;
}
