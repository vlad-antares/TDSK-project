document.write('<script type="text/javascript" src="../js/slider.js" ></script>');
document.write('<script type="text/javascript" src="../js/events.js" ></script>');
document.write('<script type="text/javascript" src="../js/map.js" ></script>');
document.write('<script type="text/javascript" src="../js/slider_range.js" ></script>');
document.write('<script type="text/javascript" src="../js/sticky.js" ></script>');
//поміняти id в слайдерах ціни
//поміняти id в слайдерах ціни
$(document).ready(function(){

    ///////iCheck////////
    $('.input_iCheck').iCheck({
        checkboxClass: 'icheckbox_minimal-green',
        radioClass: 'iradio_minimal-green',
        increaseArea: '20%' // optional
      });

    //////Selectric////////

    $(function() {
      $('select').selectric();
    });


    //////////sticky////////////

$(".wrapper__residential_complex_block__left_block__sticky").stick_in_parent();

$('.actualy_questions_wrapper__Slider__ul > li > a').on('click',function(e){
        e.preventDefault();
         var n=$('.actualy_questions_wrapper__Slider__ul > li > a').index(this); 
         $('.actualy_questions_wrapper > .actualy_questions_wrapper__container').siblings('.actualy_questions_wrapper__container').addClass('act_dn');
         $('.actualy_questions_wrapper > .actualy_questions_wrapper__container').eq(n).removeClass('act_dn');
    });

    $('.actualy_questions_wrapper__Slider__ul_second > li > a').on('click',function(e){
        e.preventDefault();
         var p=$('.actualy_questions_wrapper__Slider__ul_second > li > a').index(this);
         $('.actualy_questions_wrapper > .actualy_questions_wrapper__container').siblings('.actualy_questions_wrapper__container').addClass('act_dn');
         $('.actualy_questions_wrapper > .actualy_questions_wrapper__container').eq(p).removeClass('act_dn');
    });
    if($(window).width() <= 1024){
        $('.actualy_questions_wrapper__Slider__ul > li').click(function(){
            $(this).children('div').slideToggle(600);
        })
        $('.actualy_questions_wrapper__Slider__ul_second > li').click(function(){
            $(this).children('div').slideToggle(600);
        })
    }
    
    $("[data-fancybox]").fancybox({
        // Options will go here
    });

})
