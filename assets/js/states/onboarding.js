(function (window, Cryptoloji, undefined) {
  'use strict'
  var timeline = new TimelineLite({onComplete: function() {
    //loop the animation
    //this.restart()
  }});
  
  // 
  // go directly to step 1
  // 
  Cryptoloji.states.onboarding = {}
  Cryptoloji.states.onboarding.root = {
    enter: function () {
      Cryptoloji.stateman.go('onboarding.step1')
    }
  }

  // function
  // 
  
  function slideLogic (n) {
      Cryptoloji.UI.paginationLogic(n)
      switch (n) {
        case 1:
              var svg_elements = ["#onboarding_slide_1_encrypted_hello g", "#onboarding_slide_1_encrypted_hello_2 g", "#onboarding_slide_1_encrypted_hello_3 g", "#onboarding_slide_1_encrypted_hello_4 g"]         
              Cryptoloji.UI.animate_onboarding(svg_elements)
          break;
        case 2:
              var svg_elements = ["#onboarding_slide_2_encrypted_hello>g", "#onboarding_slide_2_encrypted_hello_2>g", "#onboarding_slide_2_encrypted_hello_3>g", "#onboarding_slide_2_encrypted_hello_4>g"]
              Cryptoloji.UI.animate_onboarding(svg_elements)
          break;

        case 3:
          animate_slide_3()
          break;
          
        case 4:
          animate_slide_4()
          break;

        case 5:
          animate_slide_5()
          break; 

        case 6:
          animate_slide_6()
          break;
      }
  }

  function next_slide(n){
    return {
      enter: function () {
        // display cross-slide elements
        $('.section_onboarding_wrapper').addClass("section-show")

        // display current slide content
        $('[slide-num="'+n+'"]').addClass("section-show")

        // display header
        Cryptoloji.stateman.emit('header:show')

        // load next slide button logic
        $('#next_button_onboarding').on("click", function(){
          Cryptoloji.stateman.go('onboarding.step'+(n+1))
        })

        if (Cryptoloji.UI.svg_loaded.length === $('[data-svg]').length){
          // if svgs are preloaded so you are caming from welcome
         slideLogic (n)
        } else {
          // wait for all svgs
          Cryptoloji.stateman.on('svg:loaded-all', function() {
            slideLogic (n)
          })
        }
      },
      leave: function () {
        $('[slide-num="'+n+'"]').removeClass("section-show")
        $('.section_onboarding_wrapper').removeClass("section-show")
      }
    }
  }

  function to_encrypt(n){
    return {
      enter: function () {
        $('[slide-num="'+n+'"]').addClass("section-show")
        $('#next_button_onboarding').on("click", function(){
          Cryptoloji.stateman.go("encrypt")
        })
      },
      leave: function () {
        $('[slide-num="'+n+'"]').removeClass("section-show")
        $('.section_onboarding_wrapper').removeClass("section-show")
        Cryptoloji.stateman.emit('header:hide')
      }
    }
  }
  
  function animate_slide_3() {
    $('#slide_3_plain_text > path').each(function(i) {
            TweenLite.set($(this), {opacity: 0.0})
    })
    TweenLite.set($('#slide_3_plain_text_bg'), {y: -300})

    
    var text_animation_duration = 0.1
    var bg_animation_duration = 1.0
    TweenLite.to($("#slide_3_plain_text_bg"), 1.0, {y: 0})
    TweenLite.to($("#slide_3_plain_text > path")[0], text_animation_duration, {delay: bg_animation_duration, opacity: 1.0})
    TweenLite.to($("#slide_3_plain_text > path")[1], text_animation_duration, {delay: bg_animation_duration + 0.1, opacity: 1.0})
    TweenLite.to($("#slide_3_plain_text > path")[2], text_animation_duration, {delay: bg_animation_duration + 0.2, opacity: 1.0})
    TweenLite.to($("#slide_3_plain_text > path")[3], text_animation_duration, {delay: bg_animation_duration + 0.3, opacity: 1.0})
    TweenLite.to($("#slide_3_plain_text > path")[4], text_animation_duration, {delay: bg_animation_duration + 0.4, opacity: 1.0})
    TweenLite.to($("#slide_3_plain_text > path")[5], text_animation_duration, {delay: bg_animation_duration + 0.5, opacity: 1.0})
    TweenLite.to($("#slide_3_plain_text > path")[6], text_animation_duration, {delay: bg_animation_duration + 0.6, opacity: 1.0})
    TweenLite.to($("#slide_3_plain_text > path")[7], text_animation_duration, {delay: bg_animation_duration + 0.7, opacity: 1.0})
    TweenLite.to($("#slide_3_plain_text > path")[8], text_animation_duration, {delay: bg_animation_duration + 0.8, opacity: 1.0})
    TweenLite.to($("#slide_3_plain_text > path")[9], text_animation_duration, {delay: bg_animation_duration + 0.9, opacity: 1.0})
    TweenLite.to($("#slide_3_plain_text > path")[10], text_animation_duration, {delay: bg_animation_duration + 1.0, opacity: 1.0})
    TweenLite.to($("#slide_3_plain_text > path")[11], text_animation_duration, {delay: bg_animation_duration + 1.1, opacity: 1.0})
  }

  function animate_slide_4() {
    timeline.clear()
    $('#slide_4_plain_text > path').each(function(i) { 
      TweenLite.set($(this), {opacity: 1.0})
    })
    $('#slide_4_encrypted_emoji > g').each(function(i) { 
      TweenLite.set($(this), {opacity: 0.0})
    })
    TweenLite.set($('#slide_4_emoji_selector'), {opacity: 0})

    TweenLite.set($("#slide_4_emoji_1"), {opacity: 0})
    TweenLite.set($("#slide_4_emoji_2"), {opacity: 0})
    TweenLite.set($("#slide_4_emoji_3"), {opacity: 0})

    TweenLite.to($("#slide_4_emoji_1"), 0.5, {delay: 1, opacity: 1})
    TweenLite.to($("#slide_4_emoji_2"), 0.5, {delay: 1, opacity: 1})
    TweenLite.to($("#slide_4_emoji_3"), 0.5, {delay: 1, opacity: 1, onComplete: function() { timeline.play()}})

    timeline.to($('#slide_4_emoji_2'), 0.3, {delay: 1.5, opacity: 0.2})
    .to($('#slide_4_emoji_2'), 0.3, {opacity: 1.0})
    .to($('#slide_4_emoji_2'), 0.3, {opacity: 0.2})
    .to($('#slide_4_emoji_2'), 0.3, {opacity: 1.0})
    .to($('#slide_4_emoji_2'), 0.3, {opacity: 0.2})
    .to($('#slide_4_emoji_2'), 0.3, {opacity: 1.0})
    .to($('#slide_4_emoji_selector'), 0.4, {opacity: 1.0})
    .to($('#slide_4_emoji_selector'), 0.5, {x: -105})
    .to($('#slide_4_emoji_selector'), 0.0, {delay: 1, x: 105})
    .to($('#slide_4_emoji_selector'), 0.5, {delay: 1, x: 0, onComplete: function() {
      var text_animation_duration = 0.1
      $('#slide_4_plain_text > path').each(function(i) {
        TweenLite.to($(this), text_animation_duration, {delay: i * text_animation_duration, opacity: 0.0})
      })

      $('#slide_4_encrypted_emoji > g').each(function(i) { 
        TweenLite.to($(this), text_animation_duration, {delay: i * text_animation_duration, opacity: 1.0})
      })
    }})
  }

  function animate_slide_5() {
    timeline.clear()
    timeline.set($('#slide_5_delivered_text'), {y: 100, opacity: 0})
    timeline.set($('#slide_5_bubble_white_text_bg'), {y: 80, opacity: 0})
    timeline.set($('#slide_5_bubble_white_text'), {opacity: 0})
    timeline.set($('#slide_5_bubble_white_dots_bg'), {opacity: 0})
    timeline.set($('#slide_5_bubble_white_dots'), {opacity: 1})

    .to($('#slide_5_delivered_text'), 0.5, {delay: 0.5, y: 0, opacity: 1})
    .to($('#slide_5_bubble_white_dots_bg'), 0.5, {delay: 0.5, y: 0, opacity: 1})
    .to($('#slide_5_bubble_white_dots > circle')[0], 0.0, {opacity: 1})
    .to($('#slide_5_bubble_white_dots > circle')[1], 0.0, {opacity: 1})
    .to($('#slide_5_bubble_white_dots > circle')[2], 0.0, {opacity: 1})
    .to($('#slide_5_bubble_white_dots > circle')[0], 0.05, {y: -5})
    .to($('#slide_5_bubble_white_dots > circle')[1], 0.05, {y: -5})
    .to($('#slide_5_bubble_white_dots > circle')[2], 0.05, {y: -5})
    .to($('#slide_5_bubble_white_dots > circle')[0], 0.05, {y: 0})
    .to($('#slide_5_bubble_white_dots > circle')[1], 0.05, {y: 0})
    .to($('#slide_5_bubble_white_dots > circle')[2], 0.05, {y: 0})
    .to($('#slide_5_bubble_white_dots > circle')[0], 0.05, {y: -5})
    .to($('#slide_5_bubble_white_dots > circle')[1], 0.05, {y: -5})
    .to($('#slide_5_bubble_white_dots > circle')[2], 0.05, {y: -5})
    .to($('#slide_5_bubble_white_dots > circle')[0], 0.05, {y: 0})
    .to($('#slide_5_bubble_white_dots > circle')[1], 0.05, {y: 0})
    .to($('#slide_5_bubble_white_dots > circle')[2], 0.05, {y: 0})
    .to($('#slide_5_bubble_white_dots_bg'), 0.1, {opacity: 0})
    .to($('#slide_5_bubble_white_dots'), 0.1, {y: 0, opacity: 0})
    .to($('#slide_5_bubble_white_text_bg'), 0.5, {y: 0, opacity: 1})
    .to($('#slide_5_bubble_white_text'), 0.5, {opacity: 1})
  }

  function animate_slide_6() {
    timeline.clear()
    timeline.set($('#slide_6_delivered_text'), {y: 100, opacity: 0})
    timeline.set($('#slide_6_bubble_white_dots_bg'), {opacity: 0})
    timeline.set($('#slide_6_bubble_white_dots'), {opacity: 0})

    timeline.to($('#slide_6_emoji_bg'), 0.5, {y: -200})
  }

  Cryptoloji.states.onboarding.step1 = next_slide(1)
  Cryptoloji.states.onboarding.step2 = next_slide(2)
  Cryptoloji.states.onboarding.step3 = next_slide(3)
  Cryptoloji.states.onboarding.step4 = next_slide(4)
  Cryptoloji.states.onboarding.step5 = next_slide(5)
  Cryptoloji.states.onboarding.step6 = next_slide(6)
  Cryptoloji.states.onboarding.step7 = next_slide(7)
  Cryptoloji.states.onboarding.step8 = to_encrypt(8)


})(window, window.Cryptoloji); 







