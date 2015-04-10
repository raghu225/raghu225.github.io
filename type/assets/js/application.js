// $('.trigger').waypoint(function(direction) {
//     alert('trigger!');
// },{ offset: 0 });


$('.letter').hover(function() {
    debugger;
    var audio = $($(this).data('sound'))[0];
    audio.play();
    
}, function() {
    
});



// $(".letter").draggable({
//         appendTo: 'body',
//         // helper: 'clone'
//     });

// $(function(){  
//  //Make every clone image unique.  
//   var counts = [0];
//     var resizeOpts = { 
//       handles: "all" ,autoHide:true
//     };    
//   $(".letter").draggable({
//                          helper: "clone",
//                          //Create counter
//                          start: function() { counts[0]++; }
//                         });

// $("#box").droppable({
//       drop: function(e, ui){
//               if(ui.draggable.hasClass("letter")) {
//      $(this).append($(ui.helper).clone());
//   //Pointing to the letter class in dropHere and add new class.
//          $("#box .letter").addClass("item-"+counts[0]);
//             $("#box .img").addClass("imgSize-"+counts[0]);
                
//   //Remove the current class (ui-draggable and letter)
//          $("#box .item-"+counts[0]).removeClass("letter ui-draggable ui-draggable-dragging");

// $(".item-"+counts[0]).dblclick(function() {
// $(this).remove();
// });     
// 	make_draggable($(".item-"+counts[0])); 
//       $(".imgSize-"+counts[0]).resizable(resizeOpts);     
//       }

//       }
//       });


// var zIndex = 0;
// function make_draggable(elements)
// {	
// 	elements.draggable({
// 		containment:'parent',
// 		start:function(e,ui){ ui.helper.css('z-index',++zIndex); },
// 		stop:function(e,ui){
// 		}
// 	});
// }    


    
//   });






$(function() {
    $( ".letter" ).draggable();
    $( "#box" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
            // helper: "clone"
      }
    });
  });
  
// $('.box').html("");

$(document).ready(function(){
    $("btn-3").click(function(){
        $(".box").hide();
    });
});


// $(document).ready(function() {
//     $(".box").droppable({
//         accept: '.letter',
//         drop: function(event, ui) {
//             $(this).append($(ui.draggable).clone());
//             $(".box .letter").addClass("item");
//             $(".item").removeClass("ui-draggable product");
//             $(".item").draggable({
//                 containment: 'parent',
//                 grid: [150,150]
//             });
//         }
//     });
//     $(".letter").draggable({
        // helper: 'clone'
//     });
// });


// ;(function($,undefined){
//     // set up background images
//     $('.letter').each(function(i,o){
//         $(o).css('background-image', 'url(' + $(o).data('src') + ')');
//     });
    
    
//     $('.letter').draggable({
//         cancel: "a.ui-icon", // clicking an icon won't initiate dragging
//         //revert: "invalid", // when not dropped, the item will revert back to its initial position
//         revert: true, // bounce back when dropped
//         helper: "clone", // create "copy" with original properties, but not a true clone
//         cursor: "move"
//         , revertDuration: 0 // immediate snap
//     });
    
//     var $container
//     $('.box').droppable({
//         accept: ".letter",
//         activeClass: "ui-state-highlight",
//         drop: function( event, ui ) {
//             // clone item to retain in original "list"
//             var $item = ui.draggable.clone();

//             $(this).addClass('has-drop').html($item);

//         }
//     });
// })(jQuery);

$(".btn-3").on("click", function( e ) {
    
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
    
});