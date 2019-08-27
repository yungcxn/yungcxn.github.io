var animation;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function manipulate(theme) {
  var link = document.createElement('link');

  link.rel = 'stylesheet';
  link.type = 'text/css';

  if(theme === "java") {
    //do nothing
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
  var themes = ["java", "python", "brainfuck", "mond", "c", "cr", "js", "asm"];
  var chosen = themes[getRandomInt(themes.length)];

  manipulate(chosen);
  MegaTf();
}


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
