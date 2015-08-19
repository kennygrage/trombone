$(document).ready(function(){
	var maxX = 6; //number of rows
	var maxY = 6; //number of columns
	var tromArray = [];


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

			tromArray[x][y] = xToString + yToString;
			$("#tromarea").append('<div id="' + tromArray[x][y] + '"></div>');
			$("#" + tromArray[x][y]).addClass("tromclass");
			$("#" + tromArray[x][y]).append(xToString + yToString);
			$("#" + tromArray[x][y]).css("background-color",uncolor);
			if (x === 0) {
				$("#" + tromArray[x][y]).css("clear", "both");
			}
		}

	}
	$(".tromclass").css("margin", "5px").css("padding", "5px").css("width", "30px").css("height", "30px").css("float", "left").css("font-size", "x-small");
});


function colorTheDivs() {
	$(document).ready(function(){
		while (idNumsToChange.length > 0) {
			$("#" + idNumsToChange[0]).css("background-color", color);
			idNumsToChangeBack.push(idNumsToChange[0]);
			idNumsToChange.shift();
		}
	});
}

function changeTheDivs() {
	for (var i = 0, len = idNumsToChange.length; i < len; i++) {
		idNumsToChange[i] = Number(idNumsToChange[i]); document.write(idNumsToChange[i] + "<br>");
		idNumsToChange[i] -= 1000; document.write(idNumsToChange[i] + "<br>"); //move to the left one space
		idNumsToChange[i].toString();document.write(idNumsToChange[i] + "<br>");
		var prefix = "900";
		idNumsToChange[i] = prefix.concat(idNumsToChange[i]);document.write(idNumsToChange[i] + "<br>");
	}
}


	var hFont = "0,0|0,0,0,0,0,0,0!0,0|0,0,0,0,0,0,0!0,0|1,1,1,1,1,1,0!0,0|0,0,0,1,0,0,0!0,0|0,0,0,1,0,0,0!0,0|1,1,1,0,0,0,0!0,0|0,0,0,0,0,0,0";
	var color = "#03d3d3";
	var uncolor = "#d3d3d3";
	var messageArray = hFont.split("!");
	var row_which_is_really_column_and_therefore_is_x=0;
	var idNumsToChange = [];
	var idNumsToChangeBack = [];

	for (var colCharNum = 0; colCharNum < messageArray.length; colCharNum++) {
		row_which_is_really_column_and_therefore_is_x++;
		var rowArray = messageArray[colCharNum].split(",");
		rowArray.shift();
		for (var eachElement = 0; eachElement < rowArray.length; eachElement++) {
			if (rowArray[eachElement].length > 1) {
				//0,0|0,0,0,0,0,0,0
				rowArray[eachElement] = rowArray[eachElement].substring(2,3);
			}
		}

		for (var eachElement = 0; eachElement < rowArray.length; eachElement++) {
			rowArray[eachElement] = rowArray[eachElement].split(",");

			if (rowArray[eachElement] == 1) {
				var color_x = row_which_is_really_column_and_therefore_is_x;
				var color_y = eachElement;
				var idNum = "00";
				idNum = idNum.concat(color_x, "00", color_y);
				idNumsToChange.push( idNum );
			}
		}
	}

	colorTheDivs();
	changeTheDivs();
	//colorTheDivs();



	document.write(idNumsToChangeBack.length + "<br>");
	for (var i = 0, len = idNumsToChangeBack.length; i < len; i++) {
		document.write(idNumsToChangeBack[i] + "<br>");
	}


	//Then set an interval and every interval redraw this message with a different starting point (col offset)
