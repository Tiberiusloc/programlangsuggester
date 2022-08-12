//Buisness Logic


window.onload = function() {

let form = document.getElementById("formOne")
form.onsubmit = function(event) {

  event.preventDefault();

  const nameInput = document.getElementById("nameInput").value;
  const questionOne = document.getElementById("questionOne").value;
  const questionTwo = document.querySelector("input[name='questionTwo']:checked").Value;
  const questionThree = document.getElementById("questionThree").Value;
  console.log ("questiontwo" + questionThree)
  const questionFour = document.getElementById("questionFour").Value;
  const questionFive = document.getElementById("questionFive").Value;

  document.querySelector("span#name1a").innerText = nameInput;
  document.querySelector("span#question1a").innerText = questionOne;
  document.querySelector("span#question2a").innerText = questionTwo;
  document.querySelector("span#question3a").innerText = questionThree;
  document.querySelector("span#question4a").innerText = questionFour;
  document.querySelector("span#question5a").innerText = questionFive;
}
}