$(function(){

  // var bodyHeight = $("body").height()
  // $(".pseudo-body").height(bodyHeight);

  // function tscrollTop(){
  //   return $(this).scrollTop();
  // }

 

  
  var controller = new ScrollMagic.Controller();

  var tween1 = TweenMax.to('.imgse', 1,
  {
    opacity : ".1",
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
  var tween6 = TweenMax.to('.spin-won',3,
  {
    "transform" : "scale(1)",
  });



  
  var scene1 = new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    duration: "200%"
  })
  
  .setTween(tween1)
  .addTo(controller)
  .addIndicators({
    name : "transform"
  });


  

  var scene2 = new ScrollMagic.Scene({
    triggerElement: '#trigger2',
    duration: "50%"
  })
  
  .setTween(tween2)
  .addTo(controller)
  .addIndicators({
    name : "textevent1"
  });

  var scene3 = new ScrollMagic.Scene({
    triggerElement: '#trigger3',
    duration: "50%"
  })
  
  .setTween(tween3)
  .addTo(controller)
  .addIndicators({
    name : "textevent2"
  });

  var scene4 = new ScrollMagic.Scene({
    triggerElement: '#trigger4',
    duration: "50%"
  })
  
  .setTween(tween4)
  .addTo(controller)
  .addIndicators({
    name : "textevent3"
  });



  var scene5 = new ScrollMagic.Scene({
    triggerElement: '#trigger5',
    duration: "150"
  })
  
  
  .setTween(tween5)
  .setClassToggle('body', 'active')
  .addTo(controller)
  .addIndicators({
    name : "textevent4"
  });


  var scene6 = new ScrollMagic.Scene({
    triggerElement: '#trigger6',  
    duration: "500"  
  })
  
  .setTween(tween6)
  .addTo(controller)
  .addIndicators({
    name : "spainwon"
  });

  var keword = new Swiper('.sec02 .swiper-container', {    
    autoplay : { // 자동 재생
      delay : 700, // 딜레이 0
    },
    speed : 1700, // 슬라이드 속도 2초
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 20,
    loop : true
  });



  
  var skilsHeight = $(".cont-box > div").height();
  $(".skils > div").height(skilsHeight);





  

  function skilsSlide(){
    $(".sec03 .skils ul li").stop().animate({"top":"-200px"},1000);
    $(".sec03 .skils ul").stop().animate({"top":"0"},1000);

  }

  var setSkils  = setInterval(function(){
    skilsSlide();
    
  },2000);
    
  
  
  
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
  


});

