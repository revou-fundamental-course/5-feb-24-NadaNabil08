var resDisplay = ""

function btnClick (e) {
	if(e == "Reset"){
		 resDisplay = "";
	} else {
		resDisplay = resDisplay + e;
		console.log(resDisplay);
	}
	document.getElementById("celcius").value = resDisplay;
	document.getElementById("celcius1").value = resDisplay;
}

celciusFahrenheit = () =>{
	let input = document.getElementById('celcius').value;
	let hasil = (input*9/5) + 32;
	document.getElementById('celcius1').value = hasil;
}