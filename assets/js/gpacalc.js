var calculator = new Object();
 calculator.totalCredits = 0;
 calculator.wghtdGradePoints = 0;
 calculator.gpa = 0;
 
 
 // Called when 'Add' button is clicked
function addScore() {
	var name = document.getElementById("name").value;
	var credits = document.getElementById("credits").value;
	var grade = document.getElementById("grade").value;
	if (!isNaN(credits)  && isValidGrade(grade) && credits > 0) {
		addCourse(name, credits, grade);
		updateGPA(credits, grade);
	
		// Make 'Clear' button visible
		var clear = document.getElementById("clear").style;
		clear.visibility = "visible";
	} else alert("Invalid data. Make sure Credits is a number greater than zero and Grade is an appropriate letter grade eg: (A, A+, ... , D-, F)");
	
		
}

function isValidGrade(grade) {
	var pattern1 = /[abcd]/i;
	var pattern2 = /[abcd]\-/i;
	var pattern3 = /[abcd]\+/i;
	if (grade.length > 2)
		return false;
	if (grade == "f" || grade == "F")
		return true;
	if (grade.length == 1)
		return pattern1.test(grade);
	return pattern3.test(grade) || pattern2.test(grade);
}

// Updates the users GPA using credit and grade info entered 
function updateGPA(credits, grade) {
	// Converts letter grade to numeric grade
	grade = convertGrade(grade); 
	
	calculator.wghtdGradePoints += credits * grade;
	calculator.totalCredits += Number(credits);	
	calculator.gpa = calculator.wghtdGradePoints / calculator.totalCredits;
	
	// Add calculated GPA to it's p element
	document.getElementById("gpa").innerHTML = "Your GPA is: " +calculator.gpa.toFixed(2);
}

// Adds the course entered by the user onto the webpage as a new list item
function addCourse(name, credits, grade) {
		
	var data = name.toUpperCase();
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	var textNode = document.createTextNode(data);
	td.appendChild(textNode);
	tr.appendChild(td);
	document.getElementById("list").appendChild(tr);
	
	data = credits;
	td = document.createElement("td");
	textNode = document.createTextNode(data);
	td.appendChild(textNode);
	tr.appendChild(td);
	document.getElementById("list").appendChild(tr);
	
	data = grade.toUpperCase();
	td = document.createElement("td");
	textNode = document.createTextNode(data);
	td.appendChild(textNode);
	tr.appendChild(td);
	document.getElementById("list").appendChild(tr);
			
	
}


// Called to convert letter grade to numeric grade
function convertGrade(grade) {
	grade = grade.toLowerCase();
	switch(grade) {
		case "a+": grade = 4.3; break;
		case "a": grade = 4.0; break;
		case "a-": grade = 3.7; break;
		case "b+": grade = 3.3; break;
		case "b": grade = 3.0; break;
		case "b-": grade = 2.7; break;
		case "c+": grade = 2.3; break;
		case "c": grade = 2.0; break;
		case "c-": grade = 1.7; break;
		case "d+": grade = 1.3; break;
		case "d": grade = 1.0; break;
		case "d-": grade = 0.7; break;
		case "f": grade = 0.0; break;
	}
	return grade;
}

// Called when the 'Clear' button is clicked
function clear() {
				
	var element = document.getElementById("list");
	while (element.hasChildNodes()) {
		element.removeChild(element.childNodes[0]);		
	}				
	calculator.totalCredits = 0;
	calculator.wghtdGradePoints = 0;
	calculator.gpa = 0;
		
	document.getElementById("clear").style.visibility = "hidden";
	document.getElementById("gpa").innerHTML = "";
}