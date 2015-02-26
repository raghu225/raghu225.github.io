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

