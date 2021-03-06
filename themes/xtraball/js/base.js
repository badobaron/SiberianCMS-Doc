/* Highlight */
$( document ).ready(function() {
    hljs.initHighlightingOnLoad();
    $('table').addClass('table table-striped table-hover');
});


$(".bs-sidebar li").on("click", function() {
    $(".bs-sidebar li").removeClass("active");
    $(this).addClass("active");
});

/* Prevent disabled links from causing a page reload */
$("li.disabled a").click(function() {
    event.preventDefault();
});

/* jQuery scroll */
var aside_top = $('#aside-dock').offset().top - 20;
var aside_width = $('#aside-dock').width();

$(window).scroll(function () {
    position();
});
$(window).resize(function() {
    $('#aside-dock').width('');
    $('#aside-dock').css('position', 'relative');
    aside_width = $('#aside-dock').width();
    position();
});

function position() {
    console.log($(window).scrollTop() + $(".bs-sidebar").height(), $(".footer").position().top);
    if($(window).scrollTop() + $(".bs-sidebar").height() > $(".footer").position().top) {
        console.log($(".footer").height());
        var bottom = $(window).scrollTop() + $(".bs-sidebar").height() - $(".footer").position().top + $(".footer").height();
        $('#aside-dock').css({
            bottom: bottom,
            top: 'initial',
            width: aside_width,
            position: 'fixed'
        });
    } else if ($(window).scrollTop() > aside_top) {
        $('#aside-dock').css({
            top: 0,
            width: aside_width,
            position: 'fixed'
        });
    } else {
        $('#aside-dock').css({
            top: 0,
            width: '',
            position: 'relative'
        });
    }
}