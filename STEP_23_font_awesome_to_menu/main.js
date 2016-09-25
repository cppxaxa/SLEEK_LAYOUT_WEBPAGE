$(document).ready(function(){
	var speed = 300;
	var menuVisible = false;
	
	$("#btnMenu").click(function(){
		//alert("Hello World");
		
		if(menuVisible == true){
			$("#titlebar").animate({left : "0px"}, speed);
			$("#ground").animate({left : "0px"}, speed);
			$("#sidemenu").animate({left : "-210px"}, speed);
			$("#btnMenu").html('<i class="fa fa-bars fa-1x"></i> MENU');
			
			menuVisible = false;
		}
		else{
			$("#titlebar").animate({left : "200px"}, speed);
			$("#ground").animate({left : "200px"}, speed);
			$("#sidemenu").animate({left : "0px"}, speed);
			$("#btnMenu").html('<i class="fa fa-arrow-left fa-1x"></i> BACK');
			
			menuVisible = true;
		}
	});
});