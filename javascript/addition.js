function currentDate()
{
	var today = new Date();
	
	var day = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();

	if(day < 10)
	{
		day = "0" + today.getDate();
	}

	if(month < 10)
	{
		month = "0" + (today.getMonth() + 1);
	}
	

	var date = month + "-" + day + "-" + year;

	return date;

}

console.log(currentDate());
