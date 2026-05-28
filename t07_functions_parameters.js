/*****************************
 Linson's JV Website
/****************************/


//variables
var name = "Linson";
var age = 15;
var isStudent = true;
var pocketMoney = 67;
var supernumber = 2;
var coolnumber = 3;
var userName = "Anger Dingus";
const OUTPUT = document.getElementById("JavaScriptOutput");
var MrPoopyHead = "MrPoopyHead";
/******************************/

 /******************************/
 displayWelcome(userName);
 console.log ("../t01_introduction.js");
 console.log ( "Hello" );
 console.log ("goodbye");
 console.log ("My name is "+ name);
 console.log ("I have "+ pocketMoney +" dollars");
 console.log(1+2);
 console.log(supernumber + 2);
 console.log(supernumber + coolnumber);
 answer = supernumber + coolnumber;
 console.log("add", answer);
 answer = supernumber - coolnumber;
 console.log("subtract", answer);
 answer = supernumber * coolnumber;
 console.log("multiply", answer);
 answer = supernumber / coolnumber;
 console.log("divide", answer);

 OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";

 OUTPUT.innerHTML += "<h2>Hello</h2>";
 OUTPUT.innerHTML += "<p>Hello</p>";
 OUTPUT.innerHTML += "<p>Hello " + name + "</p>";
 OUTPUT.innerHTML += "<p>Last</p>";

 /****************************/
function writeLine(Cool){
    OUTPUT.innerHTML += "<p>I love coding "+Cool+"</p>";
}
function displayWelcome(_name){
    OUTPUT.innerHTML += "<p>Welcome to the page "+_name+"</p>";
 }

 function Monkey(_cool, _age){
    OUTPUT.innerHTML += "<p>Good Morning, "+_cool+"</p>";
    OUTPUT.innerHTML += "<p>You are "+_age+" years old</p>";
 }

 answer = year - age
 console.log("You were born in ", answer)
 answer = age + 10
 console.log("in 10 years you will be "+ answer +" years old")
answer = pocketmoney / 2
 console.log("if you spent half of your money, you would have "+ answer)
 answer = pocketmoney / 2 + 3
 console.log("then you get $3, now you have " +  answer)

/*****************************/
 writeLine ("greiog")
 displayWelcome (userName);
 displayWelcome (MrPoopyHead);
 userName = "jreoji"
 displayWelcome (userName);
 userName = "PoopyHead Jr"
 displayWelcome (userName);
 userName = "Dog"
 displayWelcome (userName);
 userName = "Window"
 displayWelcome (userName);

 Monkey ("Peter", 35)
 Monkey ("George", 67)
 