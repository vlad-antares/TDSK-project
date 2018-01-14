///////nav-list//////

if ($(window).width() > '991'){
	$(function(){
	    $('.header__top_block__nav_menu__ul > li').hover(function(){
	      $(this).children('.header__top_block__nav_menu__ul__li_hover_block').addClass('header__top_block__nav_menu__ul__li_hover_block__db');
	    },function(){
	     $(this).children('.header__top_block__nav_menu__ul__li_hover_block').removeClass('header__top_block__nav_menu__ul__li_hover_block__db');});
  	})
}
if ($(window).width() <= '991'){
    $('.header__top_block__nav_menu__ul > li').click(function(){
      $(this).children('.header__top_block__nav_menu__ul__li_hover_block').slideToggle(1000);
    })
}

/////home/////

$(function(){
    $('.wrapper__residential_complex_block__left_block__ul > li').on('click', function(){
        $('.wrapper__residential_complex_block__left_block__ul  li').removeClass('wrapper__residential_complex_block__left_block__ul__li_active');
        $(this).addClass('wrapper__residential_complex_block__left_block__ul__li_active');
    });
})

////////nav-respon-menu///////

$('.header__top_block__nav_menu__ul__close_but').click(function(){
    $('.header__top_block__nav_menu_respon').removeClass('mob_menu_visible');
})
$('.header__top_block__nav_menu__ul__open_but').click(function(){
    $('.header__top_block__nav_menu_respon').addClass('mob_menu_visible');
})

//////////top_apartment_search///////

$('.header__top_block__nav_menu__butt_home > button').click(function(){
    $('.top_apartment_search').slideDown(750);
})
$('.top_apartment_search__close_but').click(function(){
    $('.top_apartment_search').slideUp(750);
})

///////nav-respon-menu////////

$('.header__top_block__nav_menu__ul__close_but').click(function(){
    $('.header__top_block__nav_menu_respon').removeClass('mob_menu_visible');
})
$('.header__top_block__nav_menu__ul__open_but').click(function(){
    $('.header__top_block__nav_menu_respon').addClass('mob_menu_visible');
})

///////////about_company//////////

$('.aisde__toggle_button').on('click', function(){
    $(this).parent('li').children('.aside__toggle_content').slideToggle(400);
    if ($(this).children('.control_down_aside_toggle').hasClass('control_down_aside_toggle')) {
        $(this).children('.control_down_aside_toggle').addClass('control_down_aside_toggle__visible');
    }
    else{
        $(this).children('.control_down_aside_toggle__visible').removeClass('control_down_aside_toggle__visible');
        console.log("dfdf0");
    }
});

$('.aisde__toggle_button').on('click', function(){
    $(this).parent('li').children('.selectric-aside__toggle_content').slideToggle(400);
    $(this).children(".control_down_aside_toggle, .control_down_aside_toggle_up").toggle();
    /*else if($(this).hasClass('aisde__toggle_button__active')){
        $(this).removeClass('aisde__toggle_button__active');
        console.log("dddwfregergfdf0");
    }
    else{
        $(this).children('.control_down_aside_toggle__visible').removeClass('control_down_aside_toggle__visible');
        console.log("dfdf0");
        $(this).children('.control_down_aside_toggle').addClass('control_down_aside_toggle__visible');
    }*/
});

///////how_to_pay///////////

if($(window).width() <= 1280){
    $('.main_how_to_pay_wrapper__top_content_block_info_block__ul__li_span').click(function(){
        $(this).parent().children('.main_how_to_pay_wrapper__top_content_block_info_block__ul__hover_block').slideToggle(500);
        if($(this).children('i').hasClass('span_i_rotate')){
            $(this).children('i').removeClass('span_i_rotate');
        }
        else{
            $(this).children('i').addClass('span_i_rotate');
        }
    })
}

////////mortgage//////////

$('.main_mortgage_block_wrapper__content_left_block__slide_list__ul > li').click(function(){
    $(this).children('.main_mortgage_block_wrapper__content_left_block__slide_list__ul__Li_slide_block').slideToggle(750);
    if($(this).children('span').children('i').hasClass('span_i_rotate')){
        $(this).children('span').children('i').removeClass('span_i_rotate');
    }
    else{
        $(this).children('span').children('i').addClass('span_i_rotate');
    }
})

//////////way_to_buy/////////

$('.slidetog_link').on('click', function(e) {
    e.preventDefault();
    $(this).siblings('p').slideToggle(400);
});

/////////mortgage//////////

$('.main_mortgage_block_wrapper__content_right_block__actual_quest__ul > li > a').on('click', function(e) {
    e.preventDefault();
    $(this).siblings('p').slideToggle(400);
});
