let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"'; 

document.getElementById("demo0").innerHTML =
answer1 + "<br>" + answer2 + "<br>" + answer3; 

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo1").innerHTML = text.length;

let str = "Apple, Banana, Kiwi";
document.getElementById("demo2").innerHTML = str.substring(7,13);

function myFunction() {
  let text = document.getElementById("demo3").innerHTML;
  document.getElementById("demo3").innerHTML =
  text.toLowerCase();
}

function myFunction() {
  let text = document.getElementById("demo4").innerHTML; 
  document.getElementById("demo4").innerHTML =
  text.replace("MICROSOFT","W3Schools");
}

let texts = "Hello";
const myArr = texts.split("");
texts = "";
for (let i = 0; i < myArr.length; i++) {
  texts += myArr[i] + "<br>"
}
document.getElementById("demo5").innerHTML = texts;

