// Your code here

function mapToNegativize(srcArray) {
  let arr = []
  for (let i = 0; i < srcArray.length; i++ ) {
    arr.push(srcArray[i] * -1)
  }
  return arr
}

function mapToNoChange(srcArray) {
  let arr = []
  for (let i = 0; i < srcArray.length; i++ ) {
    arr.push(srcArray[i])
  }
  return arr
}

function mapToDouble(srcArray) {
  let arr = []
  for (let i = 0; i < srcArray.length; i++ ) {
    arr.push(srcArray[i] * 2)
  }
  return arr
}

function mapToSquare(srcArray) {
  let arr = []
  for (let i = 0; i < srcArray.length; i++ ) {
    arr.push(srcArray[i] * srcArray[i])
  }
  return arr
}

function reduceToTotal(srcArray, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < srcArray.length; i++ ) {
    total = total + srcArray[i]
  }
  return total
}

function reduceToAllTrue(srcArray) {
  for (let i = 0; i < srcArray.length; i++ ) {
    if (!srcArray[i]) return false
  }
  return true
}

function reduceToAnyTrue(srcArray) {
  for (let i = 0; i < srcArray.length; i++ ) {
    if (srcArray[i]) return true
  }
  return false
}