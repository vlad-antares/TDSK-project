////slider about_company////

$('.history_slider').slick({
    dots:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<i class="fa fa-angle-right control_right_history"></i>',
    prevArrow: '<i class="fa fa-angle-left control_left_history"></i>',
});

////////slider//////

$('.slider').slick({
    dots:true
});

////slider home////

$('.main_home_content__other_shares_block__slider').slick({
    dots: true,
});

///slider answer-question////

$('.actualy_questions_wrapper__Slider').slick({
    dots:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight:true,
    nextArrow: '<i class="fa fa-angle-right control_right"></i>',
    prevArrow: '<i class="fa fa-angle-left control_left"></i>',
});

////slider home////

$('.main_home_content__services_block__list').slick({
    dots:true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            unslick:false
          }
        }
    ]
});

////////answer_questions//////////

var slider_control = $('.actualy_questions_wrapper__Slider').find('.control_left');
$('.actualy_questions_wrapper__Slider').append(slider_control);

//// slider about_cpmpany ////

$('.wrapper__residential_complex_block__right_cont__main_cont_after_head__heading_wrapper_slider').slick({
    dots:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<i class="fa fa-angle-right control_right"></i>',
    prevArrow: '<i class="fa fa-angle-left control_left"></i>',
    responsive: [
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            unslick:false
          }
        }
    ]
});

//// slider contacts////

if($(window).width() <= 767){
    $('.main_contacts_person_list__second_list > ul,.main_contacts_person_list__third_list > ul,.main_contacts_person_list__fourth_list > ul').slick({
        dots:true,
	    infinite: true,
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    responsive: [
	        {
	          breakpoint: 991,
	          settings: {
	          lidesToShow: 2,
	          slidesToScroll: 1,
	          }
	        },
	        {
	          breakpoint: 700,
	          settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	          unslick:false
	          }
	        }
	    ]
    });
}

////slider card_of_GK ////

if($(window).width() <= 767){
    $('.main_card_block_wrapper__house_info_block__lay_out__first_list_block__ul').slick({
        dots:true,
    	infinite: true,
    	slidesToShow: 1,
    	slidesToScroll: 1,
    });
}

////slider card_of_GK////

$('.main_card_block_wrapper__house_info_block__top_slider_banner').slick({
    dots:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

////slider card_of_GK////

$('.main_card_block_wrapper__house_info_block__video_top_block__video_slider_block').slick({
    dots:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$('.wrapper__residential_complex_block__right_cont__main_cont_after_head__banner').slick({
    dots:true
});