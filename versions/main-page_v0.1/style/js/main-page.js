$(function () {
	$(window).load(function(){
        $('.scroll').mCustomScrollbar();
    });

    var $frameSwitcher = $('.main-page-slider__switch'),
        $frameSwitcherItem = $('.item', $frameSwitcher);

        $frameSwitcherItem.click(function () {
            $frameSwitcherItem.removeClass('active');
            $(this).addClass('active')
        })

    });

$(window).load(function() {
    $(window).resize(function(){
        $('.announcings__item-txt').dotdotdot({
        wrap    : 'word',
        height    : 78,
        fallbackToLetter: true,
        remove    : [ ' ', ',', ';', '.', '!', '?' ],
        });
    })

    $(window).resize(function(){
        $('.main-page-catalog__item-name').dotdotdot({
        wrap    : 'word',
        height    : 58,
        fallbackToLetter: true,
        remove    : [ ' ', ',', ';', '.', '!', '?' ],
        });
    })
    $(window).resize();

    var $frameSlider = $('.main-page-slider'),
        $frameSliderInner = $('.main-page-slider__items-ii', $frameSlider),
        $frameSliderArr = $('.arrow', $frameSlider),
        frameI = 0;

    $frameSliderArr.click(function () {
        if ($(this).hasClass('left')){
            frameI--;
            $('.slider-item', $frameSlider).slice(0,5).appendTo($frameSliderInner);
        } else if ($(this).hasClass('right')) {
        frameI++;
        $('.slider-item', $frameSlider).slice(-5).prependTo($frameSliderInner);
        }
    });
});
