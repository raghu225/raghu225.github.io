var words = ["a ","ability ","accrued ","affirmation ", "after ", "all ", "an ", "and ","another ","any ","appear ","are ","as "," ascertainable ","aside ","association ","at ","balls "];

var selectedwords = false;
$(".go-button").click(function() {

    
    var functionPicker = 0;
    var color = '',
    nextwords;

    if (functionPicker==0) {
            var qtys = [1,4];
            var qty = qtys[Math.floor(Math.random()*qtys.length)];
        
            for (var i=0; i<qty; i++) {
                var nextwords = words[Math.floor(Math.random()*words.length)];
    
            while (selectedwords == nextwords) {
                nextwords = words[Math.floor(Math.random()*words.length)];
                }
    
                selectedwords = nextwords;
    
                $(".words-holder").append(nextwords);
        }
        
                
    var colorPicker = Math.floor(Math.random()*3);
    console.log(colorPicker);
    
    
    if (colorPicker==0) {
        color = 'black-outline';
    }
    
    else if (colorPicker==1) {
       color = 'red-text';
        
    } else if (colorPicker==2) {
        color = 'blue-outline';
    }

    var next_words_wrapped = '<div class="' + color + '">' + nextwords + '</div>';
    console.log(nextwords);
    $(".words-holder").append(next_words_wrapped);
    
});