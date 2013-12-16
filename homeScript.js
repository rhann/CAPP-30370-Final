$(window).ready(function(){
	console.log('Width: ' + $(window).width());
	//console.log(document.getElementById(window).width());
  });
  
 $(window).resize(function(){
	console.log('Width: ' + $(window).width());
	//console.log(document.getElementById(window).width());
  });
  
  
$('#pics').on("click", function(){
	console.log(this.attr('src'));
	console.log(this.attr('alt'));
	console.log('hello');
	});
	
$('.copyright').on('click', function(){
	console.log('hello');
	$(this).animate({
		height: '200px',
		width:	'200px',
		'background-color': 'red'},1500);
	});

		