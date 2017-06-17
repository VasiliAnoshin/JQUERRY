//check of specific by clicking
$("ul").on("click", "li", function(){
	if($(this).css("color")== "rgb(128, 128, 128)"){
		console.log("it is currently grey");
		$(this).css({
			color: "black", 
			textDecoration:"none"});
	}else{
	//If using insted in one row each css style shoud be in camelCase position
		$(this).css("color","grey");
		$(this).css("text-decoration","line-through");
	}
});
//another more elegant solution instead using a ton of code could use : $(this).toggleClass("completed");
//it automatically add and removes effect to the menu

//Click on X to delete TODO
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		//this refers to li and no to span as it working on parent control
		$(this).remove();
	});
	//stop launching click on every parent 
	event.stopPropagation();	
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});