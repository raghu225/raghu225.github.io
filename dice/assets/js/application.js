var App = {
    clicks : 0
};

var words = ["a ","ability ","accrued ","affirmation ", "after ", "all ", "an ", "and ","another ","any ","appear ","are ","as "," ascertainable ","aside ","association ","at ","balls ","be ","beach ","beam ","being ","beyond ","bit ","brought ","buried ","by ","collision ","compression ","conceal ","concurrency ","continuity ","corrosion ","course ","cusp ","cusped ","decision ","degradation ","density ","designated ","determination ","different ","distance ","do ","due ","each ","elude ","en-route ","enough ","entropy ","essential ","expansion ","falls ","first ","foreground ","form ","found ","given ","glass ","gyroscopically ","highgate ","hill ","hindering ","howsoever ","if ","in ","introduction ","iron ","is ","it ","lapse ","lead ","left ","light ","limits ","longer ","make ","mass ","matched ","matter ","may","metal ","mixed ","moment ","more ","move ","no ","objectification ","of ","offside ","offsides ","on ","once ","option ","pale ","passage ","pending ","pending ","placed ","places ","plain ","play ","precision ","progressive ","pursuit ","pushed ","put ","realm ","reducing ","relative ","rests ","rocks ","route ","same ","sand ","sands ","scattered ","second ","seems ","shift ","shining ","sight ","so ","speaking ", "stand ","stasis ","stone ","support ","swathed ","than ","that ","the ","this ","three ","time ","tip ","to ","top ","turned ","turns ","twice ","under ","upon ","use ","use ","value ","vector ","via ","was ","wave ","weight ","what ","whatsoever ","where ","wheresoever ","which ","whichsoever ","whole ","with ","within ","world ", "+"];

// var words = ['<span style="border-bottom: 1px dotted #ff0000;padding:1px"><span style="border-bottom: 1px dotted #ff0000;">alalalalalal</span></span>'];

var selectedwords = false;

var showing = true;
$('.go-button-home').click(function(event) {
    $('.blue-box').slideToggle();
    if (showing) {
        $(this).html("i");
        showing = false;
    } else {
        $(this).html("x");
        showing = true;
    }
});

// $('.go-button-home').click(function(event) {
//     $('.blue-box').slideToggle();
// });

$(".save-button").click(function() {
    
    window.open(
        "page1.html?saved=" + encodeURIComponent($(".words-holder").html()),
        '_blank' // <- This is what makes it open in a new window.
        // $('.go-button').html('').removeClass('go-button');
);

});
 var chance = Math.floor(Math.random()*10);

$(".go-button").click(function() {
    
    App.clicks += 1;
    
    if (App.clicks == 4) {
        $('.go-button')
        // $('.words-holder').addClass('zoom');
        // return false
    }
    
    if (App.clicks == 5) {
        App.clicks = 0;
        $('.words-holder').html('');
        chance = Math.floor(Math.random()*10);
        // $('.go-button').html('+').removeClass('start-over');
        return false
    }
    
    // words float sometimes randomly
    // get random spacing between words

    var random_num = Math.ceil(Math.random() * 10),
        color = '',
        word = '',
        nextwords;
    
    console.log(random_num);
    
    if (random_num <= 8) {
            var qtys = [1,4];
            var qty = qtys[Math.floor(Math.random()*qtys.length)];
        for (var i = 0; i < qty; i++) {
            nextwords = words[Math.floor(Math.random()*words.length)];
    
            while (selectedwords == nextwords) {
                nextwords = words[Math.floor(Math.random()*words.length)];
            }
    
            selectedwords = nextwords;
        }
        
        var colorPicker = Math.floor(Math.random()*4);
         console.log(colorPicker);
        if (colorPicker==0) {
            color = 'red-text';
        } else if (colorPicker==1) {
            color = 'black-outline';
        } else if (colorPicker==2) {
            color = 'blue-outline';
        } else if (colorPicker==3) {
            color = 'blue-text';
        } 
        // else if (colorPicker==4) {
        //     color = 'float';
        // }
        
        var next_words_wrapped = '<div class="' + color + '"> ' + nextwords + '</div>';
        console.log(nextwords);
       
        if (chance > 5) {
            console.log("chance: " + chance);
                   
        var wordPicker = Math.floor(Math.random()*1);
        
        if (wordPicker==0) {
            word = 'float';
        } 
        
        var next_words_wrapped = '<div style="position: absolute;" class="float ' + color + '"> ' + nextwords + '</div>';
        console.log(nextwords);
        $(".words-holder").append(next_words_wrapped);
        } else {
        $(".words-holder").append(next_words_wrapped);

        }
        
        
        
            
        // TO FLOAT:
 
        
        //
        
        // $(".words-holder").addClass('float');
        
        
                $(document).ready(function(){
                    animateDiv();
                    
                });
        
                    function makeNewPosition(){
                        
                        // Get viewport dimensions (remove the dimension of the div)
                        var h = $(window).height() - 50;
                        var w = $(window).width() - 50;
                        
                        var nh = Math.floor(Math.random() * h);
                        var nw = Math.floor(Math.random() * w);
                        
                        return [nh,nw];    
                        
                    }
                    
                    function animateDiv(){
                        var newq = makeNewPosition();
                        var oldq = $('.float').offset();
                        if ($('.float')) {
                        var speed = calcSpeed([oldq.top, oldq.left], newq);
                        
                        $('.float').animate({ top: newq[0], left: newq[1] }, speed, function(){
                          animateDiv();        
                        });
                        }
                        
                    };
                    
                    function calcSpeed(prev, next) {
                        
                        var x = Math.abs(prev[1] - next[1]);
                        var y = Math.abs(prev[0] - next[0]);
                        
                        var greatest = x > y ? x : y;
                        
                        var speedModifier = 0.1;
                    
                        var speed = Math.ceil(greatest/speedModifier);
                    
                        return speed;
                    
                }


    } else {
        var images = ['assets/graphic/i1.png','assets/graphic/i2.png', 'assets/graphic/i3.png','assets/graphic/i4.png','assets/graphic/i5.png','assets/graphic/i6.png','assets/graphic/i7.png','assets/graphic/i8.png','assets/graphic/i9.png','assets/graphic/i10.png', 'assets/graphic/i11.png','assets/graphic/i12.png','assets/graphic/i13.png','assets/graphic/i14.png','assets/graphic/i15.png'];
        $(".words-holder").append('<img class="images" src="' + images[Math.floor(Math.random()*images.length)]+ '">');
    }

});

        var QueryString = function () {
          var query_string = {};
          var query = window.location.search.substring(1);
          var vars = query.split("&");
          for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
                // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
              query_string[pair[0]] = pair[1];
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
              var arr = [ query_string[pair[0]], pair[1] ];
              query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
              query_string[pair[0]].push(pair[1]);
            }
          } 
            return query_string;
        } ();

    
    if (QueryString.saved) {
        $(".words-holder").html(decodeURIComponent(QueryString.saved));
    }
    
    
    // word = '',
    // var wordPicker = Math.floor(Math.random()*3);
    // if (wordPicker==0) {
    //         word = 'zoom';
    //     } else if (wordPicker==1) {
    //         word = 'shrink';
    //     } else if (wordPicker==2) {
    //         word = 'float';
    //     } 
    //     var next_words_wrapped = '<div class="' + word + '"> ' + nextwords + '</div>';
    //     console.log(nextwords);
    //     $(".words-holder").append(next_words_wrapped);