// explore.js

window.addEventListener('DOMContentLoaded', init);

let synth = window.speechSynthesis;
let voices = [];

let text = '';

function populateVoices(){
  voices = synth.getVoices();
  console.log(voices);
  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    let voiceSelect = document.getElementById("voice-select");
    voiceSelect.appendChild(option);
  }
}

function speak(){
  let utterance = new SpeechSynthesisUtterance("Hello world!");
}

function init() {
  //populateVoices();
  if(speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  let text_input = document.getElementById('text-to-speak');
  text_input.addEventListener('input', function(){
    text = text_input.value;
    console.log(text);
  });

  let button = document.getElementsByTagName('button')[0];

  button.addEventListener('click', function(){
    let utterance = new SpeechSynthesisUtterance(text);
    let voiceSelect = document.getElementById("voice-select");
    //console.log(voiceSelect.selectedOptions[0].getAttribute('data-name'));

    let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(var i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    synth.speak(utterance);
  });
}