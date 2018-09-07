var today = new Date()
var day = today.getUTCDay();

var nameOfDay = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

var thisDate = nameOfDay[day];

console.log("Today is: " + thisDate + ".");

var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();





console.log(hour + " " + minutes + " " + seconds);