/*****************************
 Linson's JV Website
/****************************/


//variables
var name = "Linson"
var age = 15;
var isStudent = true;
var pocketMoney = 67;
var supernumber = 2;
var coolnumber = 3;
/******************************/

 /******************************/
 console.log ("../t01_introduction.js")
 console.log ( "Hello" )
 console.log ("goodbye")
 console.log ("My name is "+ name);
 console.log ("I have "+ pocketMoney +" dollars")
 console.log(1+2);
 console.log(supernumber + 2)
 console.log(supernumber + coolnumber)
 answer = supernumber + coolnumber
 console.log("add", answer)
 answer = supernumber - coolnumber
 console.log("subtract", answer)
 answer = supernumber * coolnumber
 console.log("multiply", answer)
 answer = supernumber / coolnumber
 console.log("divide", answer)

 const OUTPUT = document.getElementById("JavaScriptOutput")
 OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"

 OUTPUT.innerHTML = "<h2>Hello</h2>"
 OUTPUT.innerHTML += "<p>Hello</p>"
 OUTPUT.innerHTML += "<p>Hello " + name + "</p>"
 OUTPUT.innerHTML += "<p>Last</p>"

 /****************************/
function writeLine(){
    OUTPUT.innerHTML += "<p>I love coding</p>";
}

/*****************************/
 writeLine ()

