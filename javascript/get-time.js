function get_time()
{
	var time = new Date();
	
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	var am_or_pm = "";

	// if the minutes is less than 10 it needs a 0 added on to the start

	if(minutes < 10) 
	{
		minutes = "0" + minutes; 
	}

	if(seconds < 10)
	{
		seconds = "0" + seconds;
	}

	//finds when the time is in the AM or PM

	if(hours < 12)
	{
		am_or_pm = "AM";
	}
	else
	{
		am_or_pm = "PM";
	}

	if(hours === 0)
	{
		hours = 12;
	}

	if(hours > 12)
	{
		hours = hours - 12;
	}



	var full_time = hours + ":" + minutes + ":" + seconds + " " + am_or_pm;

	return full_time; 
}

console.log(get_time());