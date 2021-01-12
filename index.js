/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  if (parseInt(time.split(':')[0]) < 12) {
    greeting =  "Good Morning"
  }
  else if (parseInt(time.split(':')[0]) < 17) {
    greeting = "Good Afternoon"
  }
  else {
    greeting = "Good Evening"
  }
  return greeting
}

function displayMessage(string) {
  document.getElementById('greeting').innerHTML = string
}
