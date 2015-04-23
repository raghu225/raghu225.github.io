$(document).ready(function(){
  var colors = ["#bfdd0e","#dd480e","#dd0e0e", "#0edd92","#dd0e62"];               
  var rand = Math.floor(Math.random()*colors.length);   
  $('.dot').css("background-color", colors[rand]);
  // $('h1').css("color", colors[rand]);
});

// for (var increment = 0; increment < 100; increment++) {
//   $("body").append("<div class='dot'></div>"); 
// }

// $(".dot").each(function() {
//   var newtop = Math.floor(Math.random()*100) + "%";
//   var newleft = Math.floor(Math.random()*100) + "%";
//   $(this).css("top",newtop);
//   $(this).css("left",newleft);
// });

var images = ['assets/images/2.jpg', 'assets/images/3.jpg', 'assets/images/4.jpg', 'assets/images/5.jpg', 'assets/images/6.jpg', 'assets/images/7.jpg', ];
// $('#background').css({'background-image': 'url(assets/images/' + images[Math.floor(Math.random() * images.length)] + ')'});

$(".image-holder").html('<img src="' + images[Math.floor(Math.random()*images.length)]+ '">');