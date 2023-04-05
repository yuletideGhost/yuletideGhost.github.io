  /*Button to change colors for Scheme1*/
function myFunctionS1() {
    /*Changes background color*/
document.body.style.backgroundColor = "azure";
    /*Changes colors for headers*/
let headOne = document.querySelectorAll("h1");
headOne.forEach(element => {
        element.style.color = "#5d6c8e";
});
    /*Changes colors for headers*/
let headTwo = document.querySelectorAll("h2");
headTwo.forEach(element => {
        element.style.color = "#39484a";
});
    /*Changes colors for text*/
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(element => {
    element.style.color = "#5d6c8e";
});
    /*Changes colors for text inside tables and forms*/
let tableColor = document.querySelectorAll("border, table, ol, li, fieldset");
tableColor.forEach(element => {
    element.style.color = "#5d6c8e";
});
}

  /*Button to change colors for Scheme2*/
function myFunctionS2() {
    /*Changes background color*/
document.body.style.backgroundColor = "#39484a";
    /*Changes colors for headers*/
let headOne = document.querySelectorAll("h1");
headOne.forEach(element => {
        element.style.color = "#fffdd6";
});
    /*Changes colors for headers*/
let headTwo = document.querySelectorAll("h2");
headTwo.forEach(element => {
        element.style.color = "#5f61a9";
});
    /*Changes colors for text*/
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(element => {
    element.style.color = "#fffdd6";
});
    /*Changes colors for text inside tables and forms*/
let tableColor = document.querySelectorAll("border, table, ol, li, fieldset");
tableColor.forEach(element => {
    element.style.color = "#fffdd6";
});
}

  /*Button to change colors for Scheme3*/
function myFunctionS3() {
    /*Changes background color*/
document.body.style.backgroundColor = "#b3d6cf";
    /*Changes colors for headers*/
let headOne = document.querySelectorAll("h1");
headOne.forEach(element => {
        element.style.color = "#3b5a7c";
});
    /*Changes colors for headers*/
let headTwo = document.querySelectorAll("h2");
headTwo.forEach(element => {
        element.style.color = "#39484a";
});
    /*Changes colors for text*/
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(element => {
    element.style.color = "#3b5a7c";
});
    /*Changes colors for text inside tables and forms*/
let tableColor = document.querySelectorAll("border, table, ol, li, fieldset");
tableColor.forEach(element => {
    element.style.color = "#3b5a7c";
});
}

  /*Conditionals and Notifications*/
function myFunctionCondition() {
    const i = "";
    if (confirm("Would you like to learn about the ocean?")) {
      /*alert is the notification*/
        alert("Excellent!");
    } else {
      /*conditional is else statement*/
        alert("You should donate to 4ocean and then come back.");
    }
    document.getElementById("con").innerHTML = i; 
}

  /*Event Handling - when user clicks message will appear*/
document.addEventListener("click", myFunction);
  /*when user clicks message will appear*/
function myFunction() {
  /*message*/
  document.getElementById("demo").innerHTML = "Dolphins will take over the world one day";
}