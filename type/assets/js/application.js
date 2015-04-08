// $('.trigger').waypoint(function(direction) {
//     alert('trigger!');
// },{ offset: 0 });


$('.letter').hover(function() {
    debugger;
    var audio = $($(this).data('sound'))[0];
    audio.play();
    
}, function() {
    
});

