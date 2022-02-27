document.addEventListener("keypress", function (event){
  makesound(event.key);
});
 
let drumnum = document.getElementsByClassName("drum").length; //use for finding how many drums are of class drum for use in for  loop

for (let i = 0; i <= drumnum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttoninnerhtml = this.innerHTML;
    makesound(buttoninnerhtml)
    
  });
  
}
function makesound(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var aaudio = new Audio("sounds/tom-2.mp3");
      aaudio.play();
      break;
    case "s":
      var saudio = new Audio("sounds/tom-3.mp3");
      saudio.play();
      break;
    case "d":
      var daudio = new Audio("sounds/kick-bass.mp3");
      daudio.play();
      break;
    case "j":
      var jaudio = new Audio("sounds/snare.mp3");
      jaudio.play();
      break;
    case "k":
      var kaudio = new Audio("sounds/crash.mp3");
      kaudio.play();
      break;
    case "l":
      var laudio = new Audio("sounds/tom-4.mp3");
      laudio.play();
      break;
  }
}