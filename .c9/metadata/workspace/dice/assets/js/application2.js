{"filter":false,"title":"application2.js","tooltip":"/dice/assets/js/application2.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":46,"column":3},"action":"insert","lines":["var words = [\"a \",\"ability \",\"accrued \",\"affirmation \", \"after \", \"all \", \"an \", \"and \",\"another \",\"any \",\"appear \",\"are \",\"as \",\" ascertainable \",\"aside \",\"association \",\"at \",\"balls \"];","","var selectedwords = false;","$(\".go-button\").click(function() {","","    ","    var functionPicker = 0;","    var color = '',","    nextwords;","","    if (functionPicker==0) {","            var qtys = [1,4];","            var qty = qtys[Math.floor(Math.random()*qtys.length)];","        ","            for (var i=0; i<qty; i++) {","                var nextwords = words[Math.floor(Math.random()*words.length)];","    ","            while (selectedwords == nextwords) {","                nextwords = words[Math.floor(Math.random()*words.length)];","                }","    ","                selectedwords = nextwords;","    ","                $(\".words-holder\").append(nextwords);","        }","        ","                ","    var colorPicker = Math.floor(Math.random()*3);","    console.log(colorPicker);","    ","    ","    if (colorPicker==0) {","        color = 'black-outline';","    }","    ","    else if (colorPicker==1) {","       color = 'red-text';","        ","    } else if (colorPicker==2) {","        color = 'blue-outline';","    }","","    var next_words_wrapped = '<div class=\"' + color + '\">' + nextwords + '</div>';","    console.log(nextwords);","    $(\".words-holder\").append(next_words_wrapped);","    ","});"]}]}]]},"ace":{"folds":[],"scrolltop":311,"scrollleft":0,"selection":{"start":{"row":33,"column":5},"end":{"row":33,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1430493517570,"hash":"0f9d32fd341f3d63e91362a61d9886fe4c32b17d"}