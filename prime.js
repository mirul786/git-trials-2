// Given an array find out the number of elements for which both the neighbors are greater than the elements

let arr = [5, 7, 6, 9, 8, 10]

// outpust--> 2 // (6 and 8)


let empArr= []

let count = 0;

for (let i=1; i<arr.length; i++){

if(arr[i]<arr[i-1] && arr[i]<arr[i+1]){

    count++
  
empArr.push(arr[i])
 
 }

}
console.log(count+ " "+ "("+ empArr.join(" ")+ ")")