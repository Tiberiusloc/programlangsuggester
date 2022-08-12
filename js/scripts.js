//Buisness Logic


window.onload = function() {

let form = document.getElementById("formOne")
form.onsubmit = function(event) {

  event.preventDefault();

  const nameInput = document.getElementById("nameInput").value;
  const questionOne = document.getElementById("questionOne").value;
  const questionTwo = document.querySelector("input[name='questionTwo']:checked").value;
  const questionThree = document.getElementById("questionThree").value; 
  const questionFour = document.getElementById("questionFour").value;
  const questionFive = document.getElementById("questionFive").value;

  document.querySelector("span#name1a").innerText = nameInput;
  document.querySelector("span#question1a").innerText = questionOne;
  document.querySelector("span#question2a").innerText = questionTwo;
  document.querySelector("span#question3a").innerText = questionThree;
  document.querySelector("span#question4a").innerText = questionFour;
  document.querySelector("span#question5a").innerText = questionFive;
}
}