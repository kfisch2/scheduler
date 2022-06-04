$(document).ready(function(){
  let date = new Date();
    let value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    $("#showDate").text(value);
  });			