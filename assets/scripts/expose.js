// expose.js

window.addEventListener('DOMContentLoaded', init);
let hornType = document.getElementById('horn-select');
let hornSound = document.getElementsByClassName('hidden')[0];
let sound = document.getElementsByTagName('button')[0];
let slider = document.getElementById('volume-controls');
let volImg = slider.querySelector('img');
console.log(volImg);
let slideControls = slider.getElementsByTagName('input');
console.log(slider);
const confetti = new JSConfetti();


function updateHorn() {

  let hornImage = document.querySelector('img');
  hornImage.src = "assets/images/" + hornType.value + ".svg";
  hornSound.src = 'assets/audio/' + hornType.value + '.mp3'

  if(hornType.value == 'party-horn')
  {
    confetti.addConfetti();
  }
};

function honkSound() {
  
  if(hornType.value == 'party-horn' && slideControls[0].value != 0)
  {
    confetti.addConfetti();
  }

  if(slideControls[0].value != 0)
  {
    hornSound.play();
  }
  
};


// At zero volume, the mute icon (level 0) should be displayed
// From 1 to < 33 volume the first volume level should be displayed
// From 33 to < 67 volume the second volume level should be displayed
// From 67 and up the third volume level should be displayed

// The correct volume icon should be set
function volumeSlide() {
  
  console.log(slideControls[0].value);
  if(slideControls[0].value == 0)
  {
    volImg.src = 'assets/icons/volume-level-0.svg';
  }
  else if(slideControls[0].value >= 1 && slideControls[0].value < 33)
  {
    volImg.src = 'assets/icons/volume-level-1.svg';
  }
  else if(slideControls[0].value >= 33 && slideControls[0].value < 67)
  {
    volImg.src = 'assets/icons/volume-level-2.svg';
  }
  else {
    volImg.src = 'assets/icons/volume-level-3.svg';
  }

  
};

function init() {
  // TODO
  //Event listener automatically grabs value but if you pass function you still need var name in that function declaration
  hornType.addEventListener('change', updateHorn); //This syntax tells event listener to use the horn function vs updateHornImage() would use the return value
  sound.addEventListener('click', honkSound);
  slider.addEventListener('change', volumeSlide);
  
}