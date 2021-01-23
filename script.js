var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random");

var initColor1 = "#ff0000";
var initColor2 = "#ffff00";
color1.value = initColor1;
color2.value = initColor2;
setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomGradient(firstColor, secondColor){
    body.style.background = 
    "linear-gradient(to right, "
    + firstColor
    + ","
    + secondColor
    + ")";
    css.textContent = body.style.background + ".";

    color1.value = firstColor;
    color2.value = secondColor;
}

function setRandomColor(){
	var firstColor = '#' + (Math.random().toString(16)+ "ff0000").substring(2, 8);
	console.log = firstColor;
	var secondColor = '#' + (Math.random().toString(16)+ "ffff00").substring(2, 8);
	console.log = secondColor;
	setRandomGradient(firstColor, secondColor);
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomColor);