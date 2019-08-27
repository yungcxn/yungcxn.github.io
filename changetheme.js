function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function manipulate(theme) {
  if(theme === "java") {
    //do nothing
  }
  else if(theme === "python") {

  }
  else if(theme === "brainfuck") {
    replaceGif("img/brainfuck.gif");
  }
  else if(theme === "mond") {

  }
  else if(theme === "c") {

  }
  else if(theme === "cr") {

  }
  else if(theme === "js") {

  }
  else if(theme === "asm") {

  }else {
    alert("Error!");
  }
}


function replaceGif(path) {
  var imgReplace = document.getElementById("gif");
  imgReplace.src = path;
}

var themes = ["java", "python", "brainfuck", "mond", "c", "cr", "js", "asm"];
var chosen = themes[getRandomInt(themes.length)];

/*debug*/
chosen="brainfuck";
manipulate(chosen);
