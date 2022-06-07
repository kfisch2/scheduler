// current day/date
let currentHour = () => {
  let date = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#showDate").text(date);
};

// display current time every second
setInterval(currentHour, 1000)


// hour, event, and save button variables
let hour = document.querySelectorAll(".hour");
let userInput = document.querySelectorAll(".input")
let saveBtn = document.querySelectorAll(".saveBtn")


// hour block function
function timeBlock(startTime) {
  for (i = 0; i < hour.length; i++) {
    hour[i].innerHTML = startTime++;
  };
};

// change background color depending on time of day
function changeBackgroundColor(event) {
  if (hour[event].innerHTML > new Date().getHours()) {
    userInput[event].classList.add("future")
  } else if (hour[event].innerHTML < new Date().getHours()) {
    userInput[event].classList.add("past")
  } else {
    userInput[event].classList.add("present")
  }
};

// iterate through each hour
function hourOfDay() {
  for (i = 0; i < 9; i++) {
    changeBackgroundColor(i);
  }
};

// add user event to hour blocks
function renderTask() {

  // set input/output for 9AM
  let userInput9AM = document.getElementById("9AM")
  let userOutput9AM = document.getElementById("9AM");
  let nineAMSaveBtn = document.getElementById("9AMBtn");

  // set textContent to local storage
  function storeEvent() {
    localStorage.setItem("9AM", userInput9AM.value);
    userInput.textContent = userInput9AM.value;
  };

  // retrieve textContent from local storage
  userOutput9AM.textContent = localStorage.getItem("9AM");
  userInput9AM.value = localStorage.getItem("9AM");

  // when 9AM save button clicked, 
  nineAMSaveBtn.addEventListener("click", storeEvent);
};


renderTask();
currentHour();
timeBlock(09);
hourOfDay();



