//Buisness Logic
window.onload = function() {

let form = document.getElementById("formOne")
form.onsubmit = function(event) {

  event.preventDefault();

  const nameInput = document.getElementById("nameInput").value;
  const questionOne = document.getElementById("questionOne").value;
  const questionTwo = document.getElementById("questionTwo").Value;
  console.log("questionTree")
  const questionThree = document.getElementById("questionThree").Value;
  const questionFour = document.getElementById("questionFour").Value;
  const questionFive = document.getElementById("questionFive").Value;

  document.querySelector("span#name1a").innerText = nameInput;
  document.querySelector("span#questionOne1a").innerText = questionOne;
  document.querySelector("span#questionTwo2a").innerText = questionTwo;
  document.querySelector("span#questionThree3a").innerText = questionThree;
  document.querySelector("span#questionFour4a").innerText = questionFour;
  document.querySelector("span#questionFive5a").innerText = questionFive;
}
}