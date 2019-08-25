var animation;

function MegaTf() {
  animation = anime({
   loop: true,
   targets: 'img#megaman',
   easing: 'linear',
   duration: window.innerWidth * 6,
   translateX: [0,window.innerWidth * 1.5]
 });
}

window.addEventListener('load', MegaTf);


window.addEventListener('resize', function(event){
  animation.pause();
  animation = anime({
   loop: true,
   targets: 'img#megaman',
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
