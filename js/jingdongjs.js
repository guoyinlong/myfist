$(function () {
	$('#city').mouseenter(function () {
		$('#citys').css({
			'display': 'block'
		});
		$('#city').css({
			'background': '#FFFFFF',
			'border-left': '1px solid #cccccc',
			'border-right': '1px solid #cccccc'
		});
	});
	$('#citys').mouseleave(function () {
		$('#citys').css({
			'display': 'none'
		});
		$('#city').css({
			'background': '#e3e4e5',
			'border-left': 'none',
			'border-right': 'none'
		});
	});
	$('#citystable span').click(function () {
		$(this).addClass('hongjing');
		$(this).removeClass('facespan');
		var citys = $(this).html();
		$('#city').html(citys);
	});
	//以上为城市选项下框


	// $('#fuwu').mouseenter(function () {
	// 	$('#fuwus').css({
	// 		'display': 'block'
	// 	});
	// 	$('#fuwu').css({
	// 		'background': '#FFFFFF',
	// 		'border-left': '1px solid #cccccc',
	// 		'border-right': '1px solid #cccccc'
	// 	});
	// });

	// $('#fuwus').mouseleave(function () {
	// 	$('#fuwus').css({
	// 		'display': 'none'
	// 	});
	// 	$('#fuwu').css({
	// 		'background': '#e3e4e5',
	// 		'border': 'none'
	// 	});

	// });
	//以上为服务下框


	$('#daohang').mouseenter(function () {
		$('#daohangs').css({
			'display': 'block'
		});
		$('#daohang').css({
			'background': '#FFFFFF',
			'border-left': '1px solid #cccccc',
			'border-right': '1px solid #cccccc'
		});
	});
	$('#daohangs').mouseleave(function () {
		$('#daohangs').css({
			'display': 'none'
		});
		$('#daohang').css({
			'background': '#e3e4e5',
			'border': 'none'
		});
	});
	//以上为导航下框

	//以下为大图轮播效果
	var lunbotuc = 0;

	function run() {
		lunbotuc++;
		lunbotuc = (lunbotuc == 8) ? 0 : lunbotuc;
		$('#lunbotu img').eq(lunbotuc).fadeIn(300).siblings('img').fadeOut(300);
		$('#lunbotu ul li').eq(lunbotuc).css({
			'background': '#db192a'
		}).siblings('li').css({
			'background': '#fff'
		});
	};
	var lunbotu_timer1 = setInterval(run, 3000);

	$('#lunbotu ul li').mouseenter(function () {
		var a1 = $(this);
		clearInterval(lunbotu_timer1);
		lunbotu_timer2 = setTimeout(function () {
			lunbotuc = a1.index();
			$('#lunbotu img').eq(lunbotuc).fadeIn(300).siblings('img').fadeOut(300);
			$('#lunbotu ul li').eq(lunbotuc).css({
				'background': '#db192a'
			}).siblings('li').css({
				'background': '#fff'
			});
		}, 200);
	});

	$('#lunbotu ul li').mouseleave(function () {
		clearTimeout(lunbotu_timer2);
		lunbotu_timer1 = setInterval(run, 3000);
	});

	//以下为促销公告转换效果
	// $('#cxgg ul li').mouseenter(function () {
	// 	var a2 = $(this).index();
	// 	$('#xinxibottom div').eq(a2).css({
	// 		'display': 'block'
	// 	}).siblings('div').css({
	// 		'display': 'none'
	// 	})
	// });


	//轮播图效果
	// var ypc = 0;

	// function run2() {
	// 	ypc++;
	// 	ypc = (ypc == 3) ? 0 : ypc;
	// 	$('#youpinneirong img').eq(ypc).fadeIn(200).siblings('img').fadeOut(200);
	// 	$('#youpinneirong ul li').eq(ypc).css({
	// 		'background': '#db192a'
	// 	}).siblings('li').css({
	// 		'background': '#c8c8c8'
	// 	});
	// };
	// var youpin1_timer1 = setInterval(run2, 3000);

	// $('#youpinneirong ul li').mouseenter(function () {
	// 	var b1 = $(this);
	// 	clearInterval(youpin1_timer1);
	// 	youpin1_timer2 = setTimeout(function () {
	// 		ypc = b1.index();
	// 		$('#youpinneirong img').eq(ypc).fadeIn(200).siblings('img').fadeOut(200);
	// 		$('#youpinneirong ul li').eq(ypc).css({
	// 			'background': '#db192a'
	// 		}).siblings('li').css({
	// 			'background': '#c8c8c8'
	// 		});
	// 	});
	// });

	$('#youpinneirong ul li').mouseleave(function () {
		clearTimeout(youpin1_timer2);
		youpin1_timer1 = setInterval(run2, 3000);
	});

	$('#zhuanjinav ul li').mouseenter(function () {
		var a3 = $(this).index();
		$('#zhuanjiimgs_imgs img').eq(a3).css({
			'display': 'block'
		}).siblings('img').css({
			'display': 'none'
		});
	});


	$('.kk').mouseenter(function () {
		$(this).find('.kkimgs').stop().animate({
			'bottom': '3px',
			'opacity': '0.5'
		}, 300);
		$(this).find('.kkp1').css({
			'color': '#c81623'
		});
	});

	$('.kk').mouseleave(function () {
		$(this).find('.kkimgs').stop().animate({
			'bottom': '-3px',
			'opacity': '1'
		}, 300);
		$(this).find('.kkp1').css({
			'color': '#999999'
		});
	});


	$('.quan').mouseenter(function () {
		$(this).find('.qimg').stop().animate({
			'margin-left': '-70px'
		}, 300);
	});
	$('.quan').mouseleave(function () {
		$(this).find('.qimg').stop().animate({
			'margin-left': '-80px'
		}, 300);
	});


	$('.hhtd').mouseenter(function () {
		$(this).find('img').stop().animate({
			'margin-left': '-10px'
		}, 300);
	});
	$('.hhtd').mouseleave(function () {
		$(this).find('img').stop().animate({
			'margin-left': '0px'
		}, 300);
	});



	$('.enjoy_act_item').mouseenter(function () {
		$(this).find('.enjoy_act_img').stop().animate({

			'opacity': '0.5'
		}, 300);
		$(this).find('.kkp1').css({
			'color': '#c81623'
		});
	});

	$('.enjoy_act_item').mouseleave(function () {
		$(this).find('.enjoy_act_img').stop().animate({

			'opacity': '1'
		}, 300);
		$(this).find('.kkp1').css({
			'color': '#999999'
		});
	});




	$('.enjoy_shop_item').mouseenter(function () {
		$(this).find('.enjoy_shop_img').stop().animate({

			'opacity': '0.5'
		}, 300);
		$(this).find('.kkp1').css({
			'color': '#c81623'
		});
	});

	$('.enjoy_shop_item').mouseleave(function () {
		$(this).find('.enjoy_shop_img').stop().animate({

			'opacity': '1'
		}, 300);
		$(this).find('.kkp1').css({
			'color': '#999999'
		});
	});




	$('.item_img').mouseenter(function () {
		$(this).find('.shop_img').stop().animate({

			'opacity': '0.5'
		}, 300);
		$(this).find('.kkp1').css({
			'color': '#c81623'
		});
	});

	$('.item_img').mouseleave(function () {
		$(this).find('.shop_img').stop().animate({

			'opacity': '1'
		}, 300);
		$(this).find('.kkp1').css({
			'color': '#999999'
		});
	});


})