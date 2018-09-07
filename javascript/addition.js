var today = new Date()
var day = today.getUTCDay();

var nameOfDay = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

//console.log("Today is: " + nameOfDay[day] + ".");

var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

console.log(hour + " " + minutes + " " + seconds);