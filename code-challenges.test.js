// // ASSESSMENT 4: JavaScript Coding Practical Questions with Jest
//
// // Please read all questions thoroughly
// // Pseudo coding is HIGHLY recommended
// // If you get stuck, please leave comments to help us understand your thought process
//
// // Add appropriate dependencies to the repository:
// // $ yarn add jest
//
// // Use test driven development to complete the following questions
// // Run the file with the following command:
// // $ yarn jest
//
// // Reminder: The test will call your function
//
//
// // --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
//
// // a) Create a test with an expect statement using the variable provided.


//I have refactored this test many times and cannot figure out why it will not pass the test.  I have ran it with a variable as the holder inside my toEqual, checked and rechecked for typos.....I know the function works as I ran it through node and it comes back with my expected results but my test says it is receiving an empty array.  Turns out....using console.log was interfering with the results.  While it showed me that my array was accurate, it kept the results from running.  Spent WAAAY too much time on this one!
//
var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// // //
describe("when 'shuffleArray' is called", () => {
  it("returns an array with first item removed and remaining shuffled", () => {
  expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
  expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
  })
})
// //
// // // // b) Create the function that makes the test pass.
// // // //create a function that takes an array as an arguement
// // // //use shift to remove first item in array.
// // // //use a for loop to iterate over array
// // // //generate random number with math.random
// // // //in the for loop use the random number to reference the index on what current index will swap with
// //
const shuffleArray = (array) => {
  let newArray = array.splice(1, array.length)
  let currentIndex = array.length, tempValue, randomIndex;
  for (i = 0; i < newArray.length; i++){
    randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      tempValue = newArray[currentIndex]
      newArray[currentIndex] = newArray[randomIndex]
      newArray[randomIndex] = tempValue
  }
  return newArray
}

// console.log(shuffleArray(colors1));
// console.log(shuffleArray(colors2));
//
//
//
// // --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
//
// // a) Create a test with expect statements for each of the variables provided.
//
var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("When 'cubeAndSumArray' is called", () => {
  it("return the sum of the numbers in array cubed", () => {
    expect(cubeAndSumArray(cubeAndSum1)).toEqual(99)
    expect(cubeAndSumArray(cubeAndSum2)).toEqual(1125)
  })
})
//
//
//
// // b) Create the function that makes the test pass.
// //create a custom function that takes in an array as an arguement
// //cube each number using foreach
// //use reduce to iterate over array and find the sum of the numbers in array.
//
const cubeAndSumArray = (array) => {
  let cubedArray = []
  array.forEach((value,index) => {
    cubedArray.push(value ** 3)
  })
  return cubedArray.reduce((a, b) => a + b, 0)
}

console.log(cubeAndSumArray(cubeAndSum1));
console.log(cubeAndSumArray(cubeAndSum2));
// //
// //
// // // --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
// //
// // // a) Create a test with expect statements for each of the variables provided.
// //
var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

describe("When 'onlyMinMax' is called", () => {
  it("returns with only 2 numbers in array that are smallest and largest", () => {
    expect(onlyMinMax(nums1)).toEqual([-8, 90])
    expect(onlyMinMax(nums2)).toEqual([-59, 109])
  })
})
// //
// // // b) Create the function that makes the test pass.
// // //Create a custom function that takes an array of numbers as an arguement
// // //use filter to find smallest number and largest number in array. -- refactored this as I could not get filter to show both min num and max num.
// // // refactor shows finding the minimum and maximum numbers by using math function in a variable and pushing into an empty array.
// //
const onlyMinMax = (array) => {
  let minMaxArray = []
  let minNum = Math.min(...array)
  let maxNum = Math.max(...array)
  minMaxArray.push(minNum, maxNum)
  return minMaxArray
}

console.log(onlyMinMax(nums1));
console.log(onlyMinMax(nums2));
// //
// //
// // // --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.
// //
// // // a) Create a test with expect statements for each of the variables provided.
// //
var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

describe("When 'altCaps' is called", () => {
  it("returns every other letter capitalized in string", () => {
    expect(altCaps(testString1)).toEqual("aLbAtRoSs")
    expect(altCaps(testString2)).toEqual("jAbBeRwOcKy")
  })
})
// //
// // // b) Create the function that makes the test pass.
// // //create a function that takes a string as an arguement
// // //use split to create an array of the letters in the String
// // //use map over the split string and iterate over the array
// // //if index is not divisible by 2 then use toUpperCase else return just the value
// // //join at end of function so we return a string
// //
const altCaps = (string) => {
  return string.split("").map((value, index) => {
    if(index % 2 !== 0){
      return value.toUpperCase()
    }
    else {
      return value
    }
  })
  .join("")
}
console.log(altCaps(testString1));
console.log(altCaps(testString2));
// //
// // // --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// //
// // // a) Create a test with an expect statement using the variables provided.
// //
var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("When 'noDuplicates' is called", () => {
  it("removes any duplicate numbers from arrays and returns one array", () => {
    expect(noDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})
// //
// // // b) Create the function that makes the test pass.
// // //create a function that takes in 2 arrays as an arguement using spread operator
// // //concat arrays together into new array
// // //filter new array to find any duplicates using indexOf
// //
const noDuplicates = (array1, array2) => {
  let arrayConcat = [...array1, ...array2]
  return [...new Set(arrayConcat)]
}
console.log(noDuplicates(testArray1,testArray2));
