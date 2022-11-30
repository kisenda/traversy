const Arr = [1,2,3,4,5]

const Arr2 = Arr.map(item => {
	return `Number: ${item}`
})

console.log(Arr2)


//sort

const arrNum = [1,2,330,3,4,110]

const sortArr = arrNum.sort((a,b) => a-b)
console.log(sortArr)

//[1,2,3,4,110,330]
/*jika mau accending 
 sort((a,b) => b-a)   [330,110,4,3,2,1]
 */


//filter

const arrAge = [5, 7, 12, 15,17,32, 35, 40]

const under30 = arrAge.filter(function(items){
	return 	items < 30
})

console.log(under30)


//Reduce
const arr = [1,2,3,4,5]

const total = arr.reduce((acc, num) => (acc + num), 0)

console.log(total)

