$(document).ready(function(){
	$("#btnMenu").click(function(){
		alert("Hello World");
		$("#titlebar").animate({left : "200px"}, 500);
		$("#ground").animate({left : "200px"}, 500);
		$("#sidemenu").animate({left : "0px"}, 500);
	});
});