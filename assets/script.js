// current day; date displays when page is completely loaded
$(document).ready(function(){
  let date = new Date();
  let value = `${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][date.getDay()]}, ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  $("#showDate").text(value)
});			

