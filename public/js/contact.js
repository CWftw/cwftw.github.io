function validate() {
	var error = "";
	var valid = false;
	
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var body = document.getElementById("body").value;
	
	if(name.trim() == "" || email.trim() == "" || body.trim() == "")
	{
		error += "Please fill in all required fields!";
	} else
	{
		if(validateEmail(email))
		{
			valid = true;
		} else
		{
			error+= "\nEmail is not valid!";
		}
	}
	
	if(error != "")
	{
		valid = false;
		alert(error);
	}
	
	return valid;
}

function validateEmail(email) { 
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}