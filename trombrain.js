$(document).ready(function(){



	for (var y = maxY; y >= 0; y--) {
		for (var x = 0; x <= maxX; x++) {
			tromArray[x] = [];


			var xToString = x.toString();
			//make sure each x has three digits (put 1 or 2 zeros in front of strings with numbers less than 100)
			if (x < 10) {
				xToString = "900" + xToString;
			}
			else if (x < 100){
				xToString = "90" + xToString;
			}

			var yToString = y.toString();
			//make sure each y has three digits (put 1 or 2 zeros in front of strings with numbers less than 100)
			if (y < 10) {
				yToString = "00" + yToString;
			}
			else if (y < 100){
				yToString = "0" + yToString;
			}


			tromArray[x][y] = xToString + yToString;														//tromArray[x][y] = div name as a string
			$("#tromarea").append('<div id="' + tromArray[x][y] + '"></div>');	//make a div with an id of tromArray[x][y]
			$("#" + tromArray[x][y]).addClass("tromClass");											//add the class "tromClass" to the div
			$("#" + tromArray[x][y]).append(xToString + yToString);							//write all of the div names in the divs
			$("#" + tromArray[x][y]).css("background-color",uncolor);						//start div with inital color
			if (x === 0) {
				$("#" + tromArray[x][y]).css("clear", "both");										// start a new row
			}
		}

	}
	//add all the properties of the div
	$(".tromClass").css("margin", "5px").css("padding", "5px").css("width", "30px").css("height", "30px").css("float", "left").css("font-size", "x-small");
});

function sleep(ms) {
	var dt = new Date();
	dt.setTime(dt.getTime() + ms);
	while (new Date().getTime() < dt.getTime());
}

function initialColoring() {
	$(document).ready(function(){
		for (var colCharNum = 0; colCharNum < messageArray.length; colCharNum++) {		//go thru for loop for each number of columns that the letter has
			row_which_is_really_column_and_therefore_is_x++;
			var rowArray = messageArray[colCharNum].split(",");													//split each element of the messageArray by ","
			rowArray.shift();																														//push the top of the letter down one row
			for (var eachElement = 0; eachElement < rowArray.length; eachElement++) {
				if (rowArray[eachElement].length > 1) {
					//0,0|0,0,0,0,0,0,0
					rowArray[eachElement] = rowArray[eachElement].substring(2,3);						//rowArray[eachElement] is now the third element (the number after the vertical pipe "|")
				}
			}
			for (var eachElement = 0; eachElement < rowArray.length; eachElement++) {
				rowArray[eachElement] = rowArray[eachElement].split(",");

				if (rowArray[eachElement] == 1) {
					var idNum = 9000;
					var color_x = row_which_is_really_column_and_therefore_is_x + maxX - 6;
					var color_y = eachElement;
					idNum = idNum + color_x;
					idNum = idNum.toString();
					idNum = idNum.concat("00", color_y);
					idNumsToChange.push( idNum );
					//document.write(idNum + "<br>");
					document.write(idNumsToChange.length + "<br>");

				}
			}
		}
	});
}

function moveLetter() {
	changeTheDivs();
	colorTheDivs();
}

function colorTheDivs() {
	$(document).ready(function(){
		while (idNumsToChange.length > 0) {
			var divToColor = idNumsToChange[0];
			$("#" + divToColor).css("background-color", color);
			idNumsToChangeBack.push(idNumsToChange[0]);
			idNumsToChange.shift();
		}
	});
}

function changeTheDivs() {
	document.write(idNumsToChangeBack.length);
	for (var i = 0, len = idNumsToChange.length; i < len; i++) {
		document.write("Old number - " + idNumsToChange[i]);
		idNumsToChange[i] = Number(idNumsToChange[i]);
		idNumsToChange[i] -= 1000;  //move to the left one space
		idNumsToChange[i].toString();
		document.write(" - New number - " + idNumsToChange[i] + "<br>");
	}
}

	var maxX = 20; 			//number of rows
	var maxY = 6;				//number of columns
	var tromArray = [];	//array that will hold the names of all of the divs
	var hFont = "0,0|0,0,0,0,0,0,0!0,0|0,0,0,0,0,0,0!0,0|1,1,1,1,1,1,0!0,0|0,0,0,1,0,0,0!0,0|0,0,0,1,0,0,0!0,0|1,1,1,0,0,0,0!0,0|0,0,0,0,0,0,0";
	var color = "#03d3d3";
	var uncolor = "#d3d3d3";
	var messageArray = hFont.split("!");										//hold the data for the letter that is to be moved accross the screen - split by each "!"
	var row_which_is_really_column_and_therefore_is_x=0;
	var idNumsToChange = [];
	var idNumsToChangeBack = [];

	initialColoring();
	document.write("After initialColoring: " + idNumsToChange.length + "<br>");
	moveLetter();
	//moveLetter();


	//setInterval(function () {changeTheDivs(); colorTheDivs();}, 1000);

	// sleep (1000);
	//
	// changeTheDivs();
	// colorTheDivs();


	//window.setTimeout(function(){ changeTheDivs(); colorTheDivs(); }, 1000);




	//Then set an interval and every interval redraw this message with a different starting point (col offset)
