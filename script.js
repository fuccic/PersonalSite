$(document).ready(function () {
	// console.log("cats");

	// $( "#1" ).click(function() {
	//   $("#works").css("display", "none");
	//   $("#about").css("display", "inline-block");
	//   $("#contact").css("display", "none")
	// });

	// $( "#2" ).click(function() {
	//   $("#works").css("display", "inline-block");
	//   $("#about").css("display", "none");
	//   $("#contact").css("display", "none")
	// });

	// $( "#3" ).click(function() {
	//   $("#works").css("display", "none");
	//   $("#about").css("display", "none");
	//   $("#contact").css("display", "inline-block")
	// });


    $('#fullpage').fullpage({
    	anchors:['firstPage', 'secondPage', 'thirdPage']
    });
});