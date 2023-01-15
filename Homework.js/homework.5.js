//homework 1
function squareNumber(arr) {
let sum = 0;
for (const number of arr) {
    sum += Math.pow(number, 2);
    console.log(sum);
}
}

let newArr = []
function numberArr(startNum, endNum) {
for(startNum; startNum <= endNum;startNum++){
    // console.log(startNum);
    newArr.push(startNum);
}
}

numberArr(101,150);
squareNumber(newArr);


// homework 2
groceries = [2, 5, 3, 5, 5, 7, 3, 5];
function findNumber(item, array){
  let counter = 0;
  for(i=0; i<array.length; i++) {
    if(array[i] === item){ 
      counter++;
    }
  }
  console.log(counter);
  
}

findNumber(5, groceries); 


//homework 3


function findNumber(array, type) {
  var arr = [1, 2, 3, 4, 5, 6];

  for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          document.writeln(arr[i]);
      }
      }
  }

findNumber();
