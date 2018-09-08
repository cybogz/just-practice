function dayAndTime()
{
	var today = new Date()
	var day = today.getUTCDay();

	var nameOfDay = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

	var thisDate = nameOfDay[day];

	//console.log(+ ".");

	var hour = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();

	if(hour > 12)
	{
		var pm = "Today is " + thisDate + ": " + (hour - 12) + ":" + minutes + ":" + seconds + " PM";
		return pm;
	}
	else
	{
		var am = "Today is " + thisDate + ": " + hour + ":" + minutes + ":" + seconds + " AM";
		return am;
	}
}

console.log(dayAndTime());