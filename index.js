// Your code here
function enumerate(sourceArray, callback) {
  for (let i = 0; i < sourceArray.length; i++) {
    callback(sourceArray[i]);
  }
}

function mapToNegativize(sourceArray) {
  const newArray = [];
  enumerate(sourceArray, function (i) {
    newArray.push(i * -1);
  });

  return newArray;
}

function mapToNoChange(sourceArray) {
  const newArray = [];

  enumerate(sourceArray, function (i) {
    newArray.push(i);
  });

  return newArray;
}

function mapToDouble(sourceArray) {
  const newArray = [];
  enumerate(sourceArray, function (i) {
    newArray.push(i * 2);
  })

  return newArray;
}

function mapToSquare(sourceArray) {
  const newArray = [];

  enumerate(sourceArray, function (i) {
    newArray.push(Math.pow(i, 2));
  })

  return newArray;
}

function reduceToTotal(sourceArray, startingPoint) {
  let total = null;
  if (startingPoint) total = startingPoint;

  enumerate(sourceArray, function (i) {
    total += i;
  })

  return total;
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) return false;
  }

  return true;
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) return true;
  }

  return false;
}
