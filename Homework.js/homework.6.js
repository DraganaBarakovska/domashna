//HOMEWORK 1 
let chicken = document.getElementById("chicken");
let resultchicken= document.getElementById("resultchicken");
let btn = document.getElementById("btn");

function weightinChickens(input){
    let chickenWeight = 0.5;

    input = parseInt(prompt("Enter your weight in kilograms here:"));
    if (typeof(input) !== "number"){
        alert ("Invalid input");
    }else{
        header.innerText = "Your weight is equivalent to:";
        resultchicken.innerText =input/chickenWeight + " " + "chickens."
    }
}

btn.addEventListener("click", weightinChickens);



//HOMEWORK 2 
let ourDiv = document.getElementById("myDiv");
let ourDiv1 = document.getElementById("myDiv1");
let ourDiv2 = document.getElementById("myDiv2");
let ourDiv3 = document.getElementById("myDiv3");
let ourDiv4 = document.getElementById("myDiv4");
let ourDiv5 = document.getElementById("myDiv5");
let ourDiv6 = document.getElementById("myDiv6");
let ourDiv7 = document.getElementById("myDiv6");
