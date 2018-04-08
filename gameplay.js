console.log("JavaScript is working");
var clicked = new Array(5);
for (var i = 0; i < 5; i++){
	clicked[i] = new Array(5);
}
$(document).ready(function(){
	console.log("Jquery is working!")
	for (var i = 0; i < 5; i++){
		for (var j = 0; j < 5; j++){
			clicked[i][j] = false;
		}
	}
	clicked[2][2] = true;
	$("#img22").css("opacity", "1")
})

$(this).click(function(event){
	var i;
	var j;
	if (event.target.id === "img00"){
		i = 0;
		j = 0;
	}
	if (event.target.id === "img01"){
		i = 0;
		j = 1;
	}
	if (event.target.id === "img02"){
		i = 0;
		j = 2;
	}
	if (event.target.id === "img03"){
		i = 0;
		j = 3;
	}
	if (event.target.id === "img04"){
		i = 0;
		j = 4;
	}
	if (event.target.id === "img10"){
		i = 1;
		j = 0;
	}
	if (event.target.id === "img11"){
		i = 1;
		j = 1;
	}
	if (event.target.id === "img12"){
		i = 1;
		j = 2;
	}
	if (event.target.id === "img13"){
		i = 1;
		j = 3;
	}
	if (event.target.id === "img14"){
		i = 1;
		j = 4;
	}
	if (event.target.id === "img20"){
		i = 2;
		j = 0;
	}
	if (event.target.id === "img21"){
		i = 2;
		j = 1;
	}
	if (event.target.id === "img22"){
		i = 2;
		j = 2;
	}
	if (event.target.id === "img23"){
		i = 2;
		j = 3;
	}
	if (event.target.id === "img24"){
		i = 2;
		j = 4;
	}
	if (event.target.id === "img30"){
		i = 3;
		j = 0;
	}
	if (event.target.id === "img31"){
		i = 3;
		j = 1;
	}
	if (event.target.id === "img32"){
		i = 3;
		j = 2;
	}	
	if (event.target.id === "img33"){
		i = 3;
		j = 3;
	}
	if (event.target.id === "img34"){
		i = 3;
		j = 4;
	}
	if (event.target.id === "img40"){
		i = 4;
		j = 0;
	}
	if (event.target.id === "img41"){
		i = 4;
		j = 1;
	}
	if (event.target.id === "img41"){
		i = 4;
		j = 1;
	}
	if (event.target.id === "img42"){
		i = 4;
		j = 2;
	}
	if (event.target.id === "img43"){
		i = 4;
		j = 3;
	}
	if (event.target.id === "img44"){
		i = 4;
		j = 4;
	}	
	if (!clicked[i][j]){
		$(event.target).css("opacity", "1")
		clicked[i][j] = true;
		var win = checkwin(i, j);
	}
	else{
		$(event.target).css("opacity", "0")
		clicked[i][j] = false;
	}
	console.log(win);
	// if (win){
		// win(i, j);
	// }
})

function checkwin(i, j){
	var xrow = 0;
	var xcol = 0;
	var xdiagdown = 0;
	var xdiagup = 0;
	for (var k = 0; k < 5; k++){
		if (clicked[k][j]){
			xcol++;
		}
	}
	for (var k = 0; k < 5; k++){
		if (clicked[i][k]){
			xrow++;
		}
	}
	for (var k = 0; k < 5; k++){
		if (clicked[k][k]){
			xdiagdown++;
		}
	}
	for (var k = 0; k < 5; k++){
		if (clicked[k][4 - k]){
			xdiagup++;
		}
	}
	if (xcol >= 5 || xrow >= 5 || xdiagdown >= 5 || xdiagup >= 5){
		return true;
	}
	else{
		return false;
	}
}

// function win( i, j){

// }