$('.drawings').hover(function() {
    var src  = $(this).data('on'),
        path = 'assets/drawings/',
        full_path = path + src;
    
    $(this).attr('src', full_path);
    
}, function() {
    var src  = $(this).data('off'),
        path = 'assets/drawings/',
        full_path = path + src;
    
    $(this).attr('src', full_path);
});

$('.drawings').click(function(event) {
    event.preventDefault();
    $(this).addClass('viewed');
    $('.lightbox-wrapper').addClass('show');
    // alert($(this).data("img"))
    $('.lightbox').css({ "background-image": "url(assets/images/" + $(this).data("img") + ")" });
    $('.lightbox').addClass('image');
});

$('.cross').click(function(event) {
    event.preventDefault();
    
    $('.lightbox-wrapper').removeClass('show');
    $('.lightbox').removeClass('image');
});