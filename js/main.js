$('.form').submit(function(e) {
	e.preventDefault();
	$(".btn").button('loading');
	setTimeout(function() {
		$('input').val('');
		$('.btn').button('reset');
   }, 5000);

});