
var animation;
var themes;
var chosen;
var themeNow;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function manipulate(theme) {
  var link = document.createElement('link');

  themeNow = theme;

  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.id="custom";

  if(theme === "java") {
    link.href = 'java.css';
  }
  else if(theme === "python") {
    replaceGif("img/python.gif");
    link.href = 'python.css';
  }
  else if(theme === "brainfuck") {
    replaceGif("img/brainfuck.gif");
    link.href = 'brainfuck.css';
  }
  else if(theme === "mond") {
    replaceGif("img/mond.gif");
    link.href = 'mond.css';
  }
  else if(theme === "c") {
    replaceGif("img/c.gif");
    link.href = 'c.css';
  }
  else if(theme === "cr") {
    replaceGif("img/cr.gif");
    link.href = 'cr.css';
  }
  else if(theme === "js") {
    replaceGif("img/js.gif");
    link.href = 'js.css';
  }
  else if(theme === "asm") {
    replaceGif("img/megaman.gif");
    link.href = 'asm.css';
  }else {
    alert("Error!");
  }
  document.getElementsByTagName('HEAD')[0].appendChild(link);
}

function remanipulate() {

  try {
    var somelink = document.querySelector("link#custom");
    somelink.parentNode.removeChild(somelink);
  }catch(e) {
    alert("Hallo");
  }
    var somechosen = themes[getRandomInt(themes.length)];
    manipulate(somechosen);



}


function replaceGif(path) {
  var imgReplace = document.getElementById("gif");
  imgReplace.src = path;
}



function MegaTf() {
  animation = anime({
   loop: true,
   targets: 'img#gif',
   easing: 'linear',
   duration: window.innerWidth * 6,
   translateX: [0,window.innerWidth * 1.5]
 });
}

window.onload = function() {
  themes = ["java", "python", "brainfuck", "mond", "c", "cr", "js", "asm"];
  chosen = themes[getRandomInt(themes.length)];

  /*debug*/
  /*chosen="java"*/

  manipulate(chosen);
  MegaTf();
};


window.addEventListener('resize', function(event){
  animation.pause();
  animation = anime({
   loop: true,
   targets: 'img#gif',
   easing: 'linear',
   duration: window.innerWidth * 6,
   translateX: [0,window.innerWidth * 1.5]
 });
  animation.play();
});

/*
translateX frame.width
duration screen width * 4

translateX -150
easing: steps
*/
