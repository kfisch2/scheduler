// current day/date
let setTime = () => {
  let date = moment().format("MMMM Do YYYY, h:mm:ss a");
  $(document).ready(function(){
  $("#showDate").text(date);
  })
};

setTime();

// refresh page every second
setInterval(setTime, 1000)



// user input in rows
let input = document.querySelectorAll(".input");
for(i=0; i < input.length; i++) {
  input[i].innerHTML = '<input type="text" name="task" placeholder="Enter event here" style="width:50" >'
};

// hour and event variables
let hour = document.querySelectorAll(".hour");
let userInput = document.querySelectorAll(".input")

// hour block function
function timeBlock(startTime) { 
  for(i=0; i < hour.length; i++ ) {
    hour[i].innerHTML = startTime++ ;
  };
};

// change background color depending on time of day
function changeBackgroundColor (event) {
  if(hour[event].innerHTML > new Date().getHours()) {
    userInput[event].classList.add("future")
  } else if (hour[event].innerHTML < new Date().getHours()) {
  userInput[event].classList.add("past")
  } else {
  userInput[event].classList.add("present")
  }
};

// iterate through each hour
function hourOfDay () {
  for (i=0; i < 9; i++) {
  changeBackgroundColor(i);
  }
};

// save userInput to localStorage





timeBlock(08);
hourOfDay();