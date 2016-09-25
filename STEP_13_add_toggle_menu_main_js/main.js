$(document).ready(function(){
	var menuVisible = false;
	
	$("#btnMenu").click(function(){
		alert("Hello World");
		
		if(menuVisible == true){
			$("#titlebar").animate({left : "0px"}, 500);
			$("#ground").animate({left : "0px"}, 500);
			$("#sidemenu").animate({left : "-210px"}, 500);
			
			menuVisible = false;
		}
		else{
			$("#titlebar").animate({left : "200px"}, 500);
			$("#ground").animate({left : "200px"}, 500);
			$("#sidemenu").animate({left : "0px"}, 500);
			
			menuVisible = true;
		}
	});
});