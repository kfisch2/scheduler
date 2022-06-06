// current day/date 
let date = new Date();
$(document).ready(function(){
  let day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][date.getDay()]
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "Septermber", "October", "November","December"][date.getMonth()]
  let value = `${day}, ${month} ${date.getDate()} ${date.getFullYear()}`
  $("#showDate").text(value)
});		


// user input in rows
let input = document.querySelectorAll(".input");
for(i=0; i < input.length; i++) {
  input[i].innerHTML = '<input type="text" name="task" placeholder="Enter event here" style="width:50" >'
};

// hour and event blocks
let hour = document.querySelectorAll(".hour");
let d = new Date();
let workHour = d.setTime(09);
let userInput = document.querySelectorAll(".input")

// function
function timeBlock() { 
  for(i=0; i < hour.length; i++ ) {
    hour[i].innerHTML = workHour++ ;
  };
};

// change background color depending on time of day
function changeBackgroundColor (event) {
  if(hour[event].innerHTML > new Date().getHours()) {
    userInput[event].style.backgroundColor = "green"
  } else if (hour[event].innerHTML < new Date().getHours()) {
  userInput[event].style.backgroundColor = "grey"
  } else {
  userInput[event].style.backgroundColor = "red"
  }
};

// iterate through each hour
function hourOfDay () {
  for (i=0; i < 9; i++) {
  changeBackgroundColor(i);
  }
};



// save userInput to localStorage





timeBlock();
hourOfDay();