//homework 1

function greeting(name, mood, activity){
    console.log(`This is ${name} . ${name} is a nice person.Today they are ${mood} . They are  ${activity} all they. The end. `);
}
greeting("Dragana", "Good", "Working");

//homework 2 

let numbers = [11, 21, 23, 19, 16];
function sumofnumbers(numbers){
    let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]
    console.log(sum)
}
sumofnumbers(numbers)

//homework 3

let strings = ["Hello " , "there " , "students " , "of " , "SEDC"];
function sumofstrings(strings){
    let sum = strings[0] + strings[1] + strings[2] + strings[3] + strings[4]
    console.log(sum)
}
sumofnumbers(strings)

//homework 4 

let num = [11, 21, 23, 19, 16];
function sumofnumbers(num){
    let min = Math.min.apply(null, num)
    let max = Math.max.apply(null, num)
    let sum = num[0] + num[1] + num[2] + num[3] + num[4]

    console.log("The min value is: "+min);
    console.log("The max value is: "+max);
    console.log("The sum of numbers is "+sum)
}
sumofnumbers(num)


