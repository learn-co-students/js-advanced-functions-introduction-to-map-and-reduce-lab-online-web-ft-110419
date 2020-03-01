function mapToNegativize(array) {
	let newArray = []
	for (let i = 0; i < array.length; i++) {
		newArray.push(array[i]*-1)
	}
	return newArray
}

function mapToNoChange(array) {
	return array.slice()
}

function mapToDouble(array) {
	let newArray = []
	for (let i = 0; i < array.length; i++) {
		newArray.push(array[i]*2)
	}
	return newArray
}

function mapToSquare(array) {
	let newArray = []
	for (let i = 0; i < array.length; i++){
		newArray.push(array[i]*array[i])
	}
	return newArray
 }


function myMap(array, callback) {
	let newArray = []
	for (let i = 0; i < array.length; i++) {
		newArray.push(callback(array[i]))
	}
	return newArray
}


function reduceToTotal(array, start=0) {
	for (let i = 0; i < array.length; i++){
		start = start + array[i]
	}
	return start
}

function reduceToAllTrue(array) {
	let start = true
	for (let i = 0; i < array.length; i++){
		if (!array[i]) {
			start = false
			break
		}
	}
	return start
}

function reduceToAnyTrue(array) {
	let start = false
	for (let i = 0; i < array.length; i++){
		if (!!array[i]) {
			start = true
			break
		}
	}
	return start
}

// Your code here
