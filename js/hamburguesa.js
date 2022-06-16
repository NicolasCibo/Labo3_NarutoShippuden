function myFunction() {
	var x = document.getElementById("mibarra");
	if (x.className === "barratop"){
		x.className += " responsive";
	} 
	else{
		x.className = "barratop";
	}
}