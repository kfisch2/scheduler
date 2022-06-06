// current day/date 
let date = new Date();
$(document).ready(function(){
  let day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][date.getDay()]
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "Septermber", "October", "November","December"][date.getMonth()]
  let value = `${day}, ${month} ${date.getDate()} ${date.getFullYear()}`
  $("#showDate").text(value)
});		

let past = document.querySelector(".past");
let present = document.querySelector(".present");
let future = document.querySelector(".future");

let currentTime = date.getTime();

// time block
// const nineAm = new Date('June 4, 2022 09:00:00');
// const today = new Date()
// if(nineAm < Date.now()) {
//   past.style.backgroundColor = 'red';
// } else {
//   past.style.backgroundColor = 'green';
// }

// user input in rows
let input = document.querySelectorAll(".input");
for(i=0; i < input.length; i++) {
  input[i].innerHTML = '<input type="text" name="task" placeholder="Enter event here" style="width:50" >'
};

// hour
let hour = document.querySelectorAll(".hour");
let d = new Date();
let workHour = d.setTime(09);
for(i=0; i < hour.length; i++ ) {
  hour[i].innerHTML = workHour++ + ":00:00";
  setBackgroundColor();
}

// background color of hour
function setBackgroundColor () {
  let time = new Date();
  let userInput = document.getElementById("userInput")
  if (time.getHours() > workHour - 9) {
    userInput.style.backgroundColor = "grey"
  } else if (time.getHours() < workHour - 9) {
    userInput.style.backgroundColor = "green"
  } else {
    userInput.style.backgroundColor = "red"
  };

}



// save userInput to localStorage