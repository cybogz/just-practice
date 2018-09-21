function get_date()
{
	var today = new Date();

	var day = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();

	if(day < 10)
	{
		day = "0" + day;
	}

	if(month < 10)
	{
		month = "0" + month;
	}

	let todaysDate = month + "-" + day + "-" + year;

	return todaysDate;
}

console.log(get_date());