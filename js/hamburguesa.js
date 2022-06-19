function myFunction() {
	var x = document.getElementById("navi");
	if (x.className === "nav-header"){
		x.className += " responsive";
	} 
	else{
		x.className = "nav-header";
	}
}