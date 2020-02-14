// mobile App
	$('.fixApp .mAppBtn').bind('click',function(){
		if ($(this).hasClass('on')){
			$(this).removeClass('on');
			$('#allBg').fadeOut(300).removeAttr('style','');
			$('.fixApp .appBoxM').fadeOut(300);
		} else {
			$(this).addClass('on');
			$('#allBg').fadeIn(300).css('z-index','200');
			$('.fixApp .appBoxM').fadeIn(300);
		}
	});

	$('.fixApp a.boxBtn, #allBg').bind('click',function(){
		$('#allBg').fadeOut(300).removeAttr('style','');
		$('.fixApp .appBoxM').fadeOut(300);
		$('.fixApp .mAppBtn').removeClass('on');
	});
