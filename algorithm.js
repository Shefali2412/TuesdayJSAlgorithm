// 1. Addition
// Algorithm:
// I/O: numbers from 200 to 2700
// O/P: numbers divisible by 3 or 5 but not both
// step 1: create & intialise variable sum to 0
// step 2: use for loop , initialise n to 200 ,condition n less than equal to 2700
//                  use if with condition n/3 = 0 and n/5=0 but not equal to both
//                   then add sum , n & assign it to sum
// step 3: print sum 

let sum = 0;
for(let n=200; n<=2700; n++)
{
    if((n%3 === 0) !== (n%5 === 0))
    {
        sum = sum+n;
    }
}
console.log(sum);

// 2. Shift the Values
// I/O: Given any array X, for example [2,1,6,4,-7]
// O/P: shifts each number by one to the front EX [-7,4,6,1,2]
// Steps:
// 1. create an array X & an empty new array
// 2. create a function shiftFront 
//     use for loop i = array length - 1 , i less than equal to 0 , decreament i by 1
//      then push array value to new array
//          return new array
// 3. call function and pass array

let shift = [];
function shiftFront (arr5){
  for(let i=arr5.length-1; i>=0; i--){
    shift.push(arr5[i]);
  }
  return shift;

}
let Z = [2,1,6,4,-7];
console.log(shiftFront(Z));



// 3. FizzBuzz
// I/O : number 1 to 135 in array
// O/P : [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]
// Algorithm: 
// step 1: create a fizzBuzz function and inside use for & if/else 
// step 2: use for loop
//   step 2a: use if num/3=0 and num/5=0  then print FizzBuzz
//          2b: again if num/3=0 then print Fizz 
//            2c: again if num/5=0 then print Buzz
// step 3:  print array


function fizzBuzz(n) {
  let result = [];
  for(let i=1; i<=n; i++) {
    if(i%3 === 0 && i%5 === 0){
        result.push('FizzBuzz');
    } else if (i % 3 === 0) {
        result.push('Fizz');
      } else if (i % 5 === 0) {
        result.push('Buzz');
      } else {
        result.push(i);
      }
    }
    return result;
    }

    let A = fizzBuzz(135);
    console.log(A);
  
// 4. Fibonacci
//  I/O: 100000
//  O/P : 0 1 1 2 3 5 8 13 21...
// steps:
// 1. make a function and pass parameter m 
//  1a. create an array with value 0 & 1
//   1b. use for loop , with i=2 and less than m 
//    1c. then add previous two values & push to array
//     1d. return array
// 2. make a variable and initialise with value
// 3. call function 
// 4. print values 

function generateFibonacci(m) {
  const fibonacciSequence = [0, 1];

  for (let i = 2; i < m; i++) {
    const nextFibonacciNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextFibonacciNumber);
  }

  return fibonacciSequence;
}

const m = 1000000; // Change this to the number of Fibonacci numbers you want
const fibonacciNumbers = generateFibonacci(m);
console.log(fibonacciNumbers); // Output the Fibonacci sequence


// 5. Remove the Negative
// I/O : array [1,-2,4,1]
// O/P : array [1,4,1]
// steps:
// 1. create & initialise variable with array
// 2. create a function to pass any array
// 3. use for loop with , i=0 ,i<array length, increament i
//            then ,use if with condition array value >= 0 
//                 then, push to new array
// 4. print new array 

let arr1 = [1,-2,4,1];
let resultArr = [];
function removeNegative(arr2){
for(let i=0; i<arr1.length; i++)
{
  if(arr1[i] >= 0){
    resultArr.push(arr1[i]);
  }
}
 return resultArr;
}
console.log(removeNegative(arr1));


// 6. Communist Censorship
// I/O:  ['Man', 'I','Love','The','Matrix','Program']
// O/P : ['Man', 'I','Love','The','Matrix','*******'] // REPLACE PROGRAM WITH ***
// Steps:
// 1. create & initialise variable with array
// 2. create a function and pass array 
// 3. use for loop with , i=0 ,i<array length, increament i
//            then ,use if with condition array value === 'program' 
//                 then, replace with ******* & push to new array
//                    else push array[i]
// 4. print new array 

let S = ['Man', 'I','Love','The','Matrix','Program'];
let newS = [];
function replaceString(arr4){
  for(let i=0; i<arr4.length; i++)
{
  if(arr4[i] === 'Program')
  {
   newS.push('*******');
  } else {
     newS.push(arr4[i]);
  }
} return newS;
}
console.log(replaceString(S));


