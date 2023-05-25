function convert() {
	let temperature = document.getElementById("temperature").value;

	if (document.getElementById("unit").value === "celsius") {
		document.getElementById("result").value = (temperature * (9/5)) + 32 + "°F / " + (parseFloat(temperature) + parseFloat(273.15)).toFixed(2) + "K";
	} else if (document.getElementById("unit").value === "fahrenheit") {
		document.getElementById("result").value = ((temperature -32) * (5/9)).toFixed(2) + "°C / " + (((temperature -32) * (5/9)) + parseFloat(273.15)).toFixed(2) + "K";
	} else if (document.getElementById("unit").value === "kelvin") {
		document.getElementById("result").value = (temperature -273.15).toFixed(2) + "°C / " + ((temperature -273.15) * (9/5) +32).toFixed(2) + "°F";
	}
}
