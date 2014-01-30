jQuery(function($) {

	var m = { x: -1, y: -1 };
	var tags = [];

    $(document).mousemove(function(event) {
        m.x = event.pageX;
        m.y = event.pageY;
    });

	var i = $('img.rk-img.edit');
	i.wrap( "<div class='rk-image-container'></div>" );

	var c = $('.rk-image-container');
	c.width(i.width()).height(i.height());

	i.click(function(){
		var px,py,posLeft,posTop,t = $(this);

		t.x = t.offset().left;
		t.y = t.offset().top;
		t.w = t.width();
		t.h = t.height();

		px = m.x - t.x;
		py = m.y - t.y;

		posLeft = (px / t.w);
		posTop = (py / t.h);

		var rand 	= Math.floor(Math.random() * 6617484) + 124315;

		var dot = $("<div></div>");
		
		dot.addClass('rk-tag-dot')
			.attr('id', 'rk-tag-dot-' + rand)
			.css('margin-left', (posLeft * t.width()) - 10)
			.css('margin-top', (posTop * t.height()) - 10)
			.prependTo($(this).parent());

		rk_log("top: " + posTop);
		rk_log("left: " + posLeft);
		rk_log('');
	});

	function rk_log(data) {
		console.log(data);
		$('#console').append('<li>' + data + '</li>');
	}

});