function doit() {
		var someValue = document.getElementById("A").value;
		var num1 = null;
		var num2;
		var outputElement = document.getElementById("result");
		document.write(num1);
}

function afunction() {
		var pattern = /y/;
		var input = document.getElementById("A").value;
		if (/y/.test(input)) {
			document.getElementById("H").innerHTML = "yay!";
		} else {
			document.getElementById("H").innerHTML = "nay!";
		}
}