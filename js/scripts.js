//Buisness Logic

window.addEventListener("load", function() {
  let form = document.getElementById("formOne");
  let resetBtn = document.getElementById("reset");
  let outcome = document.getElementById("outcome");
   
form.addEventListener("submit", function(event) {
  
  
  const nameInput = document.getElementById("nameInput").value;
  const questionOne = document.getElementById("questionOne").value;
  const questionTwo = document.getElementById("questionTwo").value;
  const questionThree = document.getElementById("questionThree").value; 
  const questionFour = document.getElementById("questionFour").value;
  const questionFive = document.getElementById("questionFive").value;
  
  document.querySelector("span#name1a").innerText = nameInput;
  document.querySelector("span#question1a").innerText = questionOne;
  document.querySelector("span#question2a").innerText = questionTwo;
  document.querySelector("span#question3a").innerText = questionThree;
  document.querySelector("span#question4a").innerText = questionFour;
  document.querySelector("span#question5a").innerText = questionFive;

  outcome.removeAttribute("class");
  
  event.preventDefault();
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