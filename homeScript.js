$(window).ready(function(){
	console.log('Window Width: ' + $(window).width());
	//console.log(document.getElementById(window).width());
  });
  
 $(window).resize(function(){
	console.log('Window Width: ' + $(window).width());
	//console.log(document.getElementById(window).width());
  });
  
  
$('.pics').on("click", function(){
	console.log($(this).attr('alt'));
	console.log('Image Width: ' + $(this).width());
	console.log('Image Height: ' + $(this).height());
	
	});
	
$(document).children('h').on('click',function(){
	console.log('clicked');
});
	
$('.copyright').on('click', function(){
	$(this).animate({
		'border-radius': '14px',
		'backgroundColor': '#dfba45'},1500);
	});

		