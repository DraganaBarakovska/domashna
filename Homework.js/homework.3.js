// //homework 1
 var year = prompt(`What is your year?`);
var rezultat = (year - 4) % 12;
switch (rezultat) {
  case 0:
    alert("Rat");
    break;
  case 1:
    alert("Ox");
    break;
  case 2:
    alert("Tiger");
    break;
  case 3:
    alert("Rabbit");
    break;
  case 4:
    alert("Dragon");
    break;
  case 5:
    alert("Snake");
    break;
  case 6:
    alert("Horse");
    break;
  case 7:
    alert("Goat");
    break;
  case 8:
    alert("Monkey");
    break;
  case 9:
    alert("Rooster");
    break;
  case 10:
    alert("Dog");
    break;
  case 11:
    alert("Pig");
    break;
}

// //homework 2

function object(name, age) {
  console.log(`My name is ${name} and i am ${age} years old`);
  console.log(typeof object);
}
object("Dragana", "19");

function test(t) {
  if (t === undefined) {
    return "Undefined value!";
  }
  return t;
}
let x;
console.log(test(x));

var bool = true;
console.log(bool);
console.log(typeof bool);

function sum(num1, num2, num3, num4) {
  console.log(num1);
  console.log(num2);
  console.log(num3);
  console.log(num4);
}
sum("2", "3", "4", "4");

function strings(movie, series) {
  console.log(`My favorite movie is ${movie}. My favorite series is ${series}`);
}
strings("Jungle Cruise", "Wednesday");

//homework 3
let dog = 5;
function years(dog) {
  let humanyear = 7 * dog;
  console.log(humanyear);
}
years(dog);

//homework 4
let accMoney = 1000;

function giveCash(needMoney) {
    if(accMoney < needMoney){
        console.log("Not enough money")
    }
    else{
        console.log(`The amount withdrown: ${needMoney} \nAccount balance ${accMoney - needMoney}`)
    }
}

giveCash(prompt("How much money you need"));

