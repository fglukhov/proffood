var is_mobile = false;

if( $('#mobile-indicator').css('display')=='block') {
  //is_mobile = true;
}

if (!is_mobile) {


  // Scenes

  var controller = new ScrollMagic.Controller();

  TweenMax.to($(".why-tmb-pic"), 0, {
    left: -100,
    right: -100,
    top: -100,
    bottom: -100,
    filter: "blur(10px)",
    ease:Power2.easeInOut
  });

  $(".why-tmb-pic").each(function (index, element) {

    var whyPicTween = TweenMax.to($(element), 1.5, {scale: 1,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      filter: "blur(0px)",
      delay: index * .75
    });

    var whyPicScene = new ScrollMagic.Scene({
      triggerElement: element.closest(".why-list"),
      offset: 0
    })
      .setTween(whyPicTween)
      .addTo(controller);



  });


}

$(document).ready(function () {

  console.log('anim 123')

});

$(window).on("resize", function () {



});

$(window).on("resize scroll", function () {



});
