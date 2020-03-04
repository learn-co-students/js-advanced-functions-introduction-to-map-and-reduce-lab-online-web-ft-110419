// Your code here
function mapToNegativize(sourceArray){
  let array = []
  sourceArray.forEach(num =>{
    array.push(num * -1)
  })
  return array
}

function mapToNoChange(sourceArray){
  let array = []
  sourceArray.forEach(string =>{
    array.push(string)
  })
  return array
}

function mapToDouble(sourceArray){
  let array = []
  sourceArray.forEach(num => {
    array.push(num * 2)
  })
  return array
}

function mapToSquare(sourceArray){
  let array = []
  sourceArray.forEach(num =>{
    array.push(num * num)
  })
  return array
}

function reduceToTotal(sourceArray, startingPoint = 0){
  sourceArray.forEach(num =>{
    startingPoint += num
  })
  return startingPoint
}

function reduceToAllTrue(sourceArray){
  let array = []
  sourceArray.forEach(elem =>{
    array.push(!!elem)
  })
  return !array.includes(false) ? true : false
}

function reduceToAnyTrue(sourceArray){
  let array = []
  sourceArray.forEach(elem =>{
    array.push(!!elem)
  })
  return array.includes(true) ? true : false
}
