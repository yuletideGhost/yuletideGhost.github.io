  /*Button to change colors for Scheme1*/
function myFunctionS1() {
document.body.style.backgroundColor = "azure";
    /*KEEP THIS*/
let headOne = document.querySelectorAll("h1");
headOne.forEach(element => {
        element.style.color = "#5d6c8e";
});
let headTwo = document.querySelectorAll("h2");
headTwo.forEach(element => {
        element.style.color = "#39484a";
});
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(element => {
    element.style.color = "#5d6c8e";
});
let tableColor = document.querySelectorAll("border, table, ol, li, fieldset");
tableColor.forEach(element => {
    element.style.color = "#5d6c8e";
});
}

  /*Button to change colors for Scheme2*/
function myFunctionS2() {
document.body.style.backgroundColor = "#39484a";
    /*KEEP THIS*/
let headOne = document.querySelectorAll("h1");
headOne.forEach(element => {
        element.style.color = "#fffdd6";
});
let headTwo = document.querySelectorAll("h2");
headTwo.forEach(element => {
        element.style.color = "#5f61a9";
});
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(element => {
    element.style.color = "#fffdd6";
});
let tableColor = document.querySelectorAll("border, table, ol, li, fieldset");
tableColor.forEach(element => {
    element.style.color = "#fffdd6";
});
}

  /*Button to change colors for Scheme3*/
function myFunctionS3() {
document.body.style.backgroundColor = "#b3d6cf";
    /*KEEP THIS*/
let headOne = document.querySelectorAll("h1");
headOne.forEach(element => {
        element.style.color = "#3b5a7c";
});
let headTwo = document.querySelectorAll("h2");
headTwo.forEach(element => {
        element.style.color = "#39484a";
});
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(element => {
    element.style.color = "#3b5a7c";
});
let tableColor = document.querySelectorAll("border, table, ol, li, fieldset");
tableColor.forEach(element => {
    element.style.color = "#3b5a7c";
});
}

  /*Conditionals and Notifications -v series of circles that are part of the header*/
function myFunctionCondition() {
    const i = "";
    if (confirm("Would you like to learn about the ocean?")) {
        alert("Excellent!");
    } else {
        alert("You should donate to 4ocean and then come back.");
    }
    document.getElementById("con").innerHTML = i; 
}

  /*Event Handling -v when user clicks message will appear*/
document.addEventListener("click", myFunction);
  /*when user clicks message will appear*/
function myFunction() {
  document.getElementById("demo").innerHTML = "Dolphins will take over the world one day";
}