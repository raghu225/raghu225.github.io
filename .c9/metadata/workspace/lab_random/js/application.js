{"filter":false,"title":"application.js","tooltip":"/lab_random/js/application.js","undoManager":{"mark":3,"position":3,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":30,"column":9},"action":"insert","lines":[" function setbackground()","      {","      window.setTimeout( \"setbackground()\", 5000); // 5000 milliseconds delay","      ","      var index = Math.round(Math.random() * 9);","      ","      var ColorValue = \"FFFFFF\"; // default color - white (index = 0)","      ","      if(index == 1)","      ColorValue = \"FFCCCC\"; //peach","      if(index == 2)","      ColorValue = \"CCAFFF\"; //violet","      if(index == 3)","      ColorValue = \"A6BEFF\"; //lt blue","      if(index == 4)","      ColorValue = \"99FFFF\"; //cyan","      if(index == 5)","      ColorValue = \"D5CCBB\"; //tan","      if(index == 6)","      ColorValue = \"99FF99\"; //lt green","      if(index == 7)","      ColorValue = \"FFFF99\"; //lt yellow","      if(index == 8)","      ColorValue = \"FFCC99\"; //lt orange","      if(index == 9)","      ColorValue = \"CCCCCC\"; //lt grey","      ","      document.getElementsByTagName(\"body\")[0].style.backgroundColor = \"#\" + ColorValue;","      ","      }","</script>"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":30,"column":9},"action":"remove","lines":["</script>"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":30,"column":0},"action":"remove","lines":[" function setbackground()","      {","      window.setTimeout( \"setbackground()\", 5000); // 5000 milliseconds delay","      ","      var index = Math.round(Math.random() * 9);","      ","      var ColorValue = \"FFFFFF\"; // default color - white (index = 0)","      ","      if(index == 1)","      ColorValue = \"FFCCCC\"; //peach","      if(index == 2)","      ColorValue = \"CCAFFF\"; //violet","      if(index == 3)","      ColorValue = \"A6BEFF\"; //lt blue","      if(index == 4)","      ColorValue = \"99FFFF\"; //cyan","      if(index == 5)","      ColorValue = \"D5CCBB\"; //tan","      if(index == 6)","      ColorValue = \"99FF99\"; //lt green","      if(index == 7)","      ColorValue = \"FFFF99\"; //lt yellow","      if(index == 8)","      ColorValue = \"FFCC99\"; //lt orange","      if(index == 9)","      ColorValue = \"CCCCCC\"; //lt grey","      ","      document.getElementsByTagName(\"body\")[0].style.backgroundColor = \"#\" + ColorValue;","      ","      }",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["$(document).ready(function(){","  var colors = [\"#CCCCCC\",\"#333333\",\"#990099\"];                ","  var rand = Math.floor(Math.random()*colors.length);           ","  $('#controls-wrapper').css(\"background-color\", colors[rand]);","  $('h1').css(\"color\", colors[rand]);","});"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":5,"column":3},"end":{"row":5,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1429740513570,"hash":"2209d4290d5a44314e6e5477931f50152c8b9e13"}