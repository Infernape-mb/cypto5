function validate()
{
	var password=document.getElementById("password").value;
    if(password=="peacemaker")
	{
		window.location=" https://cryptopuzzle1.herokuapp.com/";
		return false;
	}
	else{
		alert("Wrong password");
	}
}
