function currentDate()
{
	var today = new Date();
	
	var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	var day = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();

	if(day < 10)
	{
		day = "0" + today.getDate();
	}
	//else


	if(month < 10)
	{
		month = "0" + (today.getMonth() + 1);
	}
	

	var date = month + "-" + day + "-" + year;

	return date;

}

console.log(currentDate());
