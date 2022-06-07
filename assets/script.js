// current day/date
let currentDateAndTime = () => {
  let date = moment().format("dddd, MMMM Do YYYY");
  let time = moment().format("HH:mm:ss")
  $("#showDate").text("Today is " + date);
  $("#showTime").text( "Current time: " + time);
};

// display current time every second
setInterval(currentDateAndTime, 1000)


// hour
let hour = document.querySelectorAll(".hour");
let userInput = document.querySelectorAll(".input")



// hour block function
// can I use moment? 
let startTime = 09;
function timeBlock() {
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

//9AM
function render9AMTask() {
  // set input/output variables for 9AM
  let userInput9AM = document.getElementById("9AM")
  let userOutput9AM = document.getElementById("9AM");
  let nineAMSaveBtn = document.getElementById("9AMBtn");

  // set textContent to local storage
  function storeEvent() {
    localStorage.setItem("9AM task", userInput9AM.value);
    userInput.textContent = userInput9AM.value;
  };

  // retrieve textContent from local storage
  userOutput9AM.textContent = localStorage.getItem("9AM task");
  userInput9AM.value = localStorage.getItem("9AM task");

  // when save button clicked, 
  nineAMSaveBtn.addEventListener("click", storeEvent);
};

//10AM
function render10AMTask() {
  // set input/output variables for 11AM
  let userInput10AM = document.getElementById("10AM")
  let userOutput10AM = document.getElementById("10AM");
  let tenAMSaveBtn = document.getElementById("10AMBtn");

  // set textContent to local storage
  function storeEvent() {
    localStorage.setItem("10AM task", userInput10AM.value);
    userInput.textContent = userInput10AM.value;
  };

  // retrieve textContent from local storage
  userOutput10AM.textContent = localStorage.getItem("10AM task");
  userInput10AM.value = localStorage.getItem("10AM task");

  // when save button clicked, 
  tenAMSaveBtn.addEventListener("click", storeEvent);
};

//11AM
function render11AMTask() {

  // set input/output for 11AM
  let userInput11AM = document.getElementById("11AM")
  let userOutput11AM = document.getElementById("11AM");
  let elevenAMSaveBtn = document.getElementById("11AMBtn");

  // set textContent to local storage
  function storeEvent() {
    localStorage.setItem("11AM task", userInput11AM.value);
    userInput.textContent = userInput11AM.value;
  };

  // retrieve textContent from local storage
  userOutput11AM.textContent = localStorage.getItem("11AM task");
  userInput11AM.value = localStorage.getItem("11AM task");



  // when save button clicked, 
  elevenAMSaveBtn.addEventListener("click", storeEvent);
};

//12 PM
function render12PMTask() {

  // set input/output for 12PM
  let userInput12PM = document.getElementById("12PM")
  let userOutput12PM = document.getElementById("12PM");
  let twelvePMSaveBtn = document.getElementById("12PMBtn");


  // retrieve textContent from local storage
  userOutput12PM.textContent = localStorage.getItem("12PM task");
  userInput12PM.value = localStorage.getItem("12PM task");

  // when save button clicked
  twelvePMSaveBtn.addEventListener("click", storeEvent);

  // set textContent to local storage
  function storeEvent() {
    localStorage.setItem("12PM task", userInput12PM.value);
    userInput.textContent = userInput12PM.value;
  };
};

//1 PM
function render1PMTask() {

  // set input/output for 12PM
  let userInput1PM = document.getElementById("1PM")
  let userOutput1PM = document.getElementById("1PM");
  let onePMSaveBtn = document.getElementById("1PMBtn");


  // retrieve textContent from local storage
  userOutput1PM.textContent = localStorage.getItem("1PM task");
  userInput1PM.value = localStorage.getItem("1PM task");

  // when save button clicked
  onePMSaveBtn.addEventListener("click", storeEvent);

  // set textContent to local storage
  function storeEvent() {
    localStorage.setItem("1PM task", userInput1PM.value);
    userInput.textContent = userInput1PM.value;
  };
};

//2 PM
function render2PMTask() {

  // set input/output for 12PM
  let userInput2PM = document.getElementById("2PM")
  let userOutput2PM = document.getElementById("2PM");
  let twoPMSaveBtn = document.getElementById("2PMBtn");


  // retrieve textContent from local storage
  userOutput2PM.textContent = localStorage.getItem("2PM task");
  userInput2PM.value = localStorage.getItem("2PM task");

  // when save button clicked
  twoPMSaveBtn.addEventListener("click", storeEvent);

  // set textContent to local storage
  function storeEvent() {
    localStorage.setItem("2PM task", userInput2PM.value);
    userInput.textContent = userInput2PM.value;
  };
};

//3 PM
function render3PMTask() {

  // set input/output for 3PM
  let userInput3PM = document.getElementById("3PM")
  let userOutput3PM = document.getElementById("3PM");
  let threePMSaveBtn = document.getElementById("3PMBtn");


  // retrieve textContent from local storage
  userOutput3PM.textContent = localStorage.getItem("3PM task");
  userInput3PM.value = localStorage.getItem("3PM task");

  // when save button clicked
  threePMSaveBtn.addEventListener("click", storeEvent);

  // set textContent to local storage
  function storeEvent() {
    localStorage.setItem("3PM task", userInput3PM.value);
    userInput.textContent = userInput3PM.value;
  };
};

//4 PM
function render4PMTask() {

  // set input/output for 4PM
  let userInput4PM = document.getElementById("4PM")
  let userOutput4PM = document.getElementById("4PM");
  let fourPMSaveBtn = document.getElementById("4PMBtn");


  // retrieve textContent from local storage
  userOutput4PM.textContent = localStorage.getItem("4PM task");
  userInput4PM.value = localStorage.getItem("4PM task");

  // when save button clicked
  fourPMSaveBtn.addEventListener("click", storeEvent);

  // set textContent to local storage
  function storeEvent() {
    localStorage.setItem("4PM task", userInput4PM.value);
    userInput.textContent = userInput4PM.value;
  };
};

//5 PM
function render5PMTask() {

  // set input/output for 5PM
  let userInput5PM = document.getElementById("5PM")
  let userOutput5PM = document.getElementById("5PM");
  let fivePMSaveBtn = document.getElementById("5PMBtn");


  // retrieve textContent from local storage
  userOutput5PM.textContent = localStorage.getItem("5PM task");
  userInput5PM.value = localStorage.getItem("5PM task");

  // when save button clicked
  fivePMSaveBtn.addEventListener("click", storeEvent);

  // set textContent to local storage
  function storeEvent() {
    localStorage.setItem("5PM task", userInput5PM.value);
    userInput.textContent = userInput5PM.value;
  };
};

render9AMTask();
render10AMTask();
render11AMTask();
render12PMTask();
render1PMTask();
render2PMTask();
render3PMTask();
render4PMTask();
render5PMTask();
currentDateAndTime();
timeBlock();
hourOfDay();



