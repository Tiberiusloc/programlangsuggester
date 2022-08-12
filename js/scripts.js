//Buisness Logic

window.addEventListener("load", function() {
  let form = document.getElementById("formOne");
  let resetBtn = document.getElementById("reset");
  let outcome = document.getElementById("outcome");
  let program = document.getElementById("program");
  let cSharp = document.getElementById("cSharp");
  let java = document.getElementById("java");
  let ruby = document.getElementById("ruby");
  let errormsg = document.getElementById("error-message");
  console.log ("finished variables")

form.addEventListener("submit", function(event) {
  
  
  const nameInput = document.getElementById("nameInput").value;
  const questionOne = document.getElementById("questionOne").value;
  const questionTwo = parseInt(document.getElementById("questionTwo").value);
  const questionThree = document.getElementById("questionThree").value; 
  const questionFour = document.getElementById("questionFour").value;
  const questionFive = parseInt(document.getElementById("questionFive").value);

  document.querySelector("span#name1a").innerText = nameInput;
  document.querySelector("span#question1a").innerText = questionOne;
  document.querySelector("span#question2a").innerText = questionTwo;
  document.querySelector("span#question3a").innerText = questionThree;
  document.querySelector("span#question4a").innerText = questionFour;
  document.querySelector("span#question5a").innerText = questionFive;

  outcome.removeAttribute("class");

  
  
  event.preventDefault();
  console.log("finished function")
  
  if (questionTwo >= 11) {
    errormsg.removeAttribute("class");
    java.setAttribute("class", "hidden");
    ruby.setAttribute("class", "hidden");
    cSharp.setAttribute("class", "hidden");
  }

  if (questionTwo >= 7 && questionTwo <= 10) {
    cSharp.removeAttribute("class");
    java.setAttribute("class", "hidden");
    ruby.setAttribute("class", "hidden");
  } else if (questionTwo >= 4 && questionTwo <= 6) {
    java.removeAttribute("class");
    cSharp.setAttribute("class", "hidden");
    ruby.setAttribute("class", "hidden");
  } else if (questionTwo >= 1 && questionTwo <= 3) {
    ruby.removeAttribute("class",)
    cSharp.setAttribute("class", "hidden");
    java.setAttribute("class", "hidden");
  } 

  });

  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function() {
    outcome.setAttribute("class", "hidden");
    document.getElementById("nameInput").value = null;
    document.getElementById("questionOne").value = null;
    document.getElementById("questionTwo").value = null;
    document.getElementById("questionThree").value = null;
    document.getElementById("questionFour").value = null;
    document.getElementById("questionFive").value = null;
  
  });
});