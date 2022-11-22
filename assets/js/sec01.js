    
	
	
	
	var sec00ScrollBody = $('.sec00');
	var txtli1 = sec00ScrollBody.find('.cont_box ul li');
	var	myLayOutBg = sec00ScrollBody.find('.sec00bg');

	/*리사이즈, 스크롤할때 변해야 할 값들*/
	var sec00scrollHeight;
	var sec00sectionOffsetTop;
	var sec00sectionScrolTop;
	var sec00scrollRealHeight;
	var sec00winScrollTop;
	var sec00scrollPerecnt;
	var sec00percent;

	sec00ScrollBody.css({
		"height" : $(window).height() * 3.5
	})

	console.log($(window).height());

	function changeSec00Overlap() {
		setSec00Property();
		sec00MotionRender();
	};

	function setSec00Property() {
    sec00scrollHeight = sec00ScrollBody.height()-350;
    sec00sectionOffsetTop = sec00ScrollBody.offset().top;

    sec00scrollRealHeight = (sec00scrollHeight - $(window).height());


    sec00winScrollTop = $(window).scrollTop();


    sec00sectionScrolTop = sec00winScrollTop - sec00sectionOffsetTop;


    sec00scrollPerecnt =  sec00sectionScrolTop / sec00scrollRealHeight;

	sec00scrollPerecnt2 = (sec00sectionScrolTop / sec00scrollRealHeight) * 6.5;

    sec00percent = sec00scrollPerecnt * 100;

    
    // console.log("sec08",sec08percent);
    // console.log("sec10",sec10percent);
    // console.log("fixmotion",sec08percent);

	};

	function sec00MotionRender() {

		var transformValue = 200;
		var transformkEndValue = -1100;

		var opacityValue = 0.12;  // 오파시티
		var opacityEndValue = 0;

		var maskVal = Math.max(transformkEndValue, transformValue - (sec00scrollPerecnt2 * transformValue));
		var bgVal = Math.max(opacityEndValue, opacityValue + (sec00scrollPerecnt * opacityValue));


		txtli1
		.css({
            'transform' : 'translate(0%, '+ maskVal +'px)'
		});


		myLayOutBg
		.css({
			'opacity' : bgVal
		});
	};

	function initSec00() {
		changeSec00Overlap();
		bindSec00Event();
	};

	function bindSec00Event() {
		$(window).scroll(function(e) {
			changeSec00Overlap();
		});
	};

	if(Modernizr.csspositionsticky) {
		initSec00();
	};

	