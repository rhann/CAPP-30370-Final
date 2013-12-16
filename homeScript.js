$(window).ready(function(){
	console.log('Window Width: ' + $(window).width());
	
  });
  
 $(window).resize(function(){
	console.log('Window Width: ' + $(window).width());
	
  });
  
  
$('.pics').on("click", function(){
	console.log($(this).attr('alt'));
	console.log('Image Width: ' + $(this).width());
	console.log('Image Height: ' + $(this).height());
	
	});
	
$('h1, h2, h3, h4, h5, h6').on('click',function(){
	console.log('Text: ' + $(this).text());
	console.log('Color: ' + $(this).css('color'));
	console.log('Font-size: ' + $(this).css('font-size'));
});
	
$('.copyright').on('hover', function(){
	$(this).animate({
		'border-radius': '14px',
		'backgroundColor': '#dfba45'},1500);
	});

		