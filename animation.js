var screenX;

async function MegaTf() {

  anime({
    loop: true,
    targets: 'img#megaman',
    easing: 'linear',
    translateX: [
      {
        duration: screenX * 6,
        value: screenX
      }
    ]
  });  
}

window.onload = function() {
  screenX = window.innerWidth;
  MegaTf();
}

window.onresize = function() {
  screenX = window.innerWidth;
}

/*
translateX frame.width
duration screen width * 4

translateX -150
easing: steps
*/