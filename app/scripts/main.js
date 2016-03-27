'use strict';
$(document).ready(function() {

    /*$("#ajaxform").submit(function () {
        var error = false;
        var form = $(this);
        form.find('.alert-empty').empty();

        form.find('input').each(function() {
            if ( $(this).val() == '' ) {
                error = true;
                $(this).next().text('Не заполнено поле!');
               }
        });

        if ( !error ) {
            var data = $("#ajaxform").serialize();
            $.ajax({
                url: 'index.php',
                type: 'POST',
                data: data,
                success: function(res) {
                    
                },
                error: function() {
                    alert('Ошибка!');
                }
            });
        }
        return false;
    });*/
    $('a[data-rel^=lightcase]').lightcase({
        showCaption: false,
        disableShrink: true
    });
    $(function(){
        // $("#back-top").hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 700) {
                $("#back-top").removeClass("hidden").fadeIn(200);
            } else {
                $("#back-top").fadeOut(200);
            }
        });

        $("#back-top a").click(function () {
            $("body,html").animate({
                scrollTop:0
            }, 700);
            return false;
        });
    });
});
/*$(document).ready(function($) {
    $('a[data-rel^=lightcase]').lightcase({
        showCaption: false,
        disableShrink: true
    });
    $(function(){
        // $("#back-top").hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 700) {
                $("#back-top").removeClass("hidden").fadeIn(200);
            } else {
                $("#back-top").fadeOut(200);
            }
        });

        $("#back-top a").click(function () {
            $("body,html").animate({
                scrollTop:0
            }, 700);
            return false;
        });
    });
});*/
//HAMBURGER
$('.hamburger').on('click', function(e) {
    $(this).toggleClass('is-active');
    // If menu is already showing, slide it up. Otherwise, slide it down.
    $('.nav-list').toggleClass('slide-down');
});
$(window).resize(function(){
    if (window.matchMedia('(max-width: 991px)').matches) {
        var i = 1;
        $(".colors-list .colors-item img").each(function(){
            $(this).attr('src','../images/colors/color_'+i+'_sq.jpg');
            i++;
        });
    }
});