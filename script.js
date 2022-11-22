$(function(){

  // var bodyHeight = $("body").height()
  // $(".pseudo-body").height(bodyHeight);

  // function tscrollTop(){
  //   return $(this).scrollTop();
  // }

 

  
  var controller = new ScrollMagic.Controller();

  var tween1 = TweenMax.to('.imgse', 1,
  {
    opacity : ".25",
  });

  var tween2 = TweenMax.staggerFromTo('.text-event1', 1500  ,
  {
    transform: "translate(0%,250px)"
  },
  {
    transform: "translate(0%,0px)"
  }, 1500   );

  var tween3 = TweenMax.staggerFromTo('.text-event2', 1500  ,
  {
    transform: "translate(0%,250px)"
  },
  {
    transform: "translate(0%,0px)"
  }, 1500   );

  var tween4 = TweenMax.staggerFromTo('.text-event3', 1500  ,
  {
    transform: "translate(0%,250px)"
  },
  {
    transform: "translate(0%,0px)"
  }, 1500);


  var tween5 = TweenMax.to('.txt-box',3,
  {
    "opacity" : "0"
  });


  // 그 외 spin won 이벤트 발생
  var tween6 = TweenMax.to('.spin-won',8000,
  {
    "transform" : "scale(1)",
  });



  
  var scene1 = new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    duration: "200%"
  })
  
  .setTween(tween1)
  .addTo(controller)
  // .addIndicators({
  //   name : "transform"
  // });


  

  var scene2 = new ScrollMagic.Scene({
    triggerElement: '#trigger2',
    duration: "50%"
  })
  
  .setTween(tween2)
  .addTo(controller)
  // .addIndicators({
  //   name : "textevent1"
  // });

  var scene3 = new ScrollMagic.Scene({
    triggerElement: '#trigger3',
    duration: "50%"
  })
  
  .setTween(tween3)
  .addTo(controller)
  // .addIndicators({
  //   name : "textevent2"
  // });

  var scene4 = new ScrollMagic.Scene({
    triggerElement: '#trigger4',
    duration: "50%"
  })
  
  .setTween(tween4)
  .addTo(controller)
  // .addIndicators({
  //   name : "textevent3"
  // });



  var scene5 = new ScrollMagic.Scene({
    triggerElement: '#trigger5',
    duration: "150"
  })
  
  
  .setTween(tween5)
  .addTo(controller)
  // .addIndicators({
  //   name : "textevent4"
  // });


  var scene6 = new ScrollMagic.Scene({
    triggerElement: '#trigger6',  
    duration: "600"  
  })
  
  .setTween(tween6)
  .addTo(controller)
  // .addIndicators({
  //   name : "spainwon"
  // });

  var keword = new Swiper('.sec02 .swiper-container', {    
    autoplay : { // 자동 재생
      delay : 800, // 딜레이 0
    },
    speed : 1000, // 슬라이드 속도 2초
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 24,
    loop : true,
    touchRatio: 0,
    loopAdditionalSlides : 1,
    allowTouchMove: false,
  });



  var skils = new Swiper('.sec03 .swiper-container', {    
    autoplay : { // 자동 재생
      delay : 1000, // 딜레이 0
    },
    speed : 1000, // 슬라이드 속도 2초
    direction: 'vertical',
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 0,
    loop : true,
    touchRatio: 0,
    loopAdditionalSlides : 1,
    allowTouchMove: false,
    on: {    
     
      slideChange: function () {
        $(".sec03 .swiper-slide").css({
          "color" : "#123613"
        });  
      },  
      slideNextTransitionStart : function(){
        $(".sec03 .swiper-slide-active").css({
          "color" : "#0fff00"
        }); 
      },
    }
  });


  
  



  var scrollBody = $('.sec05');
  var sec08Body = $('.sec08');
  var sec10Body = $('.sec10');
	var titText = scrollBody.find('.intro_txt');
	var maskLeft = scrollBody.find('.left_mask');
	var maskRight = scrollBody.find('.right_mask');
	var bgImage = scrollBody.find('.bg_img');
	var endingContent = scrollBody.find('.ending_txt');

	/*리사이즈, 스크롤할때 변해야 할 값들*/
  var sec08scrollHeight;
  var sec10scrollHeight;
	var scrollHeight;
	var sectionOffsetTop;
	var sectionScrolTop;
	var scrollRealHeight;
	var winScrollTop;
	var scrollPerecnt;
	var percent;

	function changeOverlap() {
		setProperty();
		motionRender();
	};

	function setProperty() {
    sec08scrollHeight = sec08Body.height();
    sec10scrollHeight = sec10Body.height();
		scrollHeight = scrollBody.height()-600;


	  sec08OffsetTop = sec08Body.offset().top;
    sec10OffsetTop = sec10Body.offset().top;
		sectionOffsetTop = scrollBody.offset().top;


    scrollsec08RealHeight = (sec08scrollHeight - $(window).height());
    scrollsec10RealHeight = (sec10scrollHeight - $(window).height());
		scrollRealHeight = (scrollHeight - $(window).height());


		winScrollTop = $(window).scrollTop();


    sec08ScrolTop = winScrollTop - sec08OffsetTop;
    sec10ScrolTop = winScrollTop - sec10OffsetTop;
		sectionScrolTop = winScrollTop - sectionOffsetTop;


    sec08scrollPerecnt =  sec08ScrolTop / scrollsec08RealHeight;
    sec10scrollPerecnt =  sec10ScrolTop / scrollsec10RealHeight;
		scrollPerecnt =  sectionScrolTop / scrollRealHeight;


    sec08percent = sec08scrollPerecnt * 100;
    sec10percent = sec10scrollPerecnt * 100;
		percent = scrollPerecnt * 100;

    
    
    // console.log("sec08",sec08percent);
    // console.log("sec10",sec10percent);
    // console.log("fixmotion",sec08percent);
	};

	function motionRender() {

		var maskStartValue = 50;
		var maskEndValue = 0;
		var zoomValue = 1.5;
		var zoomOutValue = 1;
		var maskVal = Math.max(maskEndValue, maskStartValue - (scrollPerecnt * maskStartValue));
		var scaleVal = Math.max(zoomOutValue, zoomValue - (scrollPerecnt * zoomValue));


    var line1Val = Math.max(maskEndValue, 70 + (sec08scrollPerecnt * maskStartValue));
    var line2Val = Math.max(maskEndValue, 35 + (sec08scrollPerecnt * maskStartValue));
    var line3Val = Math.max(maskEndValue, 55 + (sec08scrollPerecnt * maskStartValue));
    var line4Val = Math.max(maskEndValue, 45 + (sec08scrollPerecnt * maskStartValue));

    var line5Val = Math.max(maskEndValue, 70 + (sec10scrollPerecnt * maskStartValue));
    var line6Val = Math.max(maskEndValue, 35 + (sec10scrollPerecnt * maskStartValue));
    var line7Val = Math.max(maskEndValue, 55 + (sec10scrollPerecnt * maskStartValue));
    var line8Val = Math.max(maskEndValue, 45 + (sec10scrollPerecnt * maskStartValue));




    
    sec08Body.find(".line1")
    .css({
      width: line1Val + '%'
    });

    sec08Body.find(".line2")
    .css({
      width: line2Val + '%'
    });
    sec08Body.find(".line3")
    .css({
      width: line3Val + '%'
    });
    sec08Body.find(".line4")
    .css({
      width: line4Val + '%'
    });

    /* ===================== */

    sec10Body.find(".line1")
    .css({
      width: line5Val + '%'
    });

    sec10Body.find(".line2")
    .css({
      width: line6Val + '%'
    });
    sec10Body.find(".line3")
    .css({
      width: line7Val + '%'
    });
    sec10Body.find(".line4")
    .css({
      width: line8Val + '%'
    });


		maskLeft
		.css({
			width: maskVal + '%'
		});

		maskRight
		.css({
			width: maskVal + '%'
		});

		bgImage
		.css({
			'transform': 'scale('+ scaleVal +')'
		});

		if(percent > 0.3) {
			titText.addClass('active');
		} else {
			titText.removeClass('active');
		}

		if(percent >= 45) {
			endingContent.addClass('active');
		} else {
			endingContent.removeClass('active');  
      
		}

    if(percent > 80){
      $(".count").addClass("active");
    }else{
      $(".count").removeClass("active");    
    }
	};

	function init() {
		changeOverlap();
		bindEvent();
	};

	function bindEvent() {
		$(window).scroll(function(e) {
			changeOverlap();
		});

		$(window).resize(function() {
			changeOverlap();
		});
	};

	if(Modernizr.csspositionsticky) {
		init();
	};

  

  // function key_word(){
  //   const rand_0_3 = Math.floor(1 +( Math.random() * 11 ));
    
  //   $(".my-keyword-box ul li").removeClass("on");
  //   $(".my-keyword-box ul li").eq(rand_0_3).addClass("on");
  // }
  // setInterval(() => {
  //   key_word()
  // }, 1200);




  /* 키워드 순차적 이벤트 pc */
  var pckeyPointKeyword = function(){
    setTimeout(() => {
      $(".my-keyword-box ul.pc li").removeClass("on");
      $(".keyword1").addClass("on");
    }, 0);
    setTimeout(() => {
      $(".my-keyword-box ul.pc li").removeClass("on");
      $(".keyword2").addClass("on");
    }, 1500);
    setTimeout(() => {
      $(".my-keyword-box ul.pc li").removeClass("on");
      $(".keyword3").addClass("on");
    }, 3000);
    setTimeout(() => {
      $(".my-keyword-box ul.pc li").removeClass("on");
      $(".keyword4").addClass("on");
    }, 4500);
  }

   setInterval(function(){
    pckeyPointKeyword();
  },6000);

  pckeyPointKeyword();

  /* 키워드 순차적 이벤트 mobile */
  var mobilekeyPointKeyword = function(){
    setTimeout(() => {
      $(".my-keyword-box ul.mobile li").removeClass("on");
      $(".mkeyword1").addClass("on");
    }, 0);
    setTimeout(() => {
      $(".my-keyword-box ul.mobile li").removeClass("on");
      $(".mkeyword2").addClass("on");
    }, 1500);
    setTimeout(() => {
      $(".my-keyword-box ul.mobile li").removeClass("on");
      $(".mkeyword3").addClass("on");
    }, 3000);
    setTimeout(() => {
      console.log(4);
      $(".my-keyword-box ul.mobile li").removeClass("on");
      $(".mkeyword4").addClass("on");
    }, 4500);
    setTimeout(() => {
      $(".my-keyword-box ul.mobile li").removeClass("on");
      $(".mkeyword5").addClass("on");
    }, 6000);
    setTimeout(() => {
      $(".my-keyword-box ul.mobile li").removeClass("on");
      $(".mkeyword6").addClass("on");
    }, 7500);
  }

  setInterval(function(){
    mobilekeyPointKeyword();
  },9500);

  mobilekeyPointKeyword();

  

  // function skilsSlide(){
  //   $(".sec03 .skils ul li").removeClass("active"); 
  //   $(".sec03 .skils ul li").animate({"top":"-200px"},800,function(){
  //     $(".sec03 .skils ul li:eq(2)").addClass("active");  
  //   });
    

  //   $(".sec03 .skils ul").animate({"top":"0"},800,function(){
  //     $(".sec03 .skils ul").append($(".sec03 .skils ul li:first")); 
      
  //     $(".sec03 .skils ul li").css("top",0);          
  //   });
    
  // }

  // var setSkils  = setInterval(function(){
    
  //   skilsSlide();
    
  //   console.log(1)
    
  // },1500);
    
  
  
  // $(".panorama p").setTimeout(function(){
  //   $(".panorama p").append("<span>👇 더 자세히 알아볼까요?</span>")
  // },600)
  
  // console.log($(".panorama p span").length);

  // setInterval ( function ()
  // {
    
  //   setTimeout(() => {
  //     $(".panorama p").append("<span>👇 더 자세히 알아볼까요?</span>")
  //   }, 500);

  //   if($(".panorama p span").length == ){

  //   }

  // }, 5000 );




  
  var skilsHeight = $(".cont-box > div").height();
  $(".skils > div").height(skilsHeight);
  $(".cont-box > div").height(skilsHeight);


  var infoCard = $(".my-info-card > div").height();
  $(".my-info-card-two > div").height(infoCard);
  
  



});

