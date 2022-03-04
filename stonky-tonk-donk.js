let userInput = '';

let searchTerm = '';

let morseCodeSequence = '';

const morseCodeMap = new Map([
  ['.-', 'A'],
  ['-...', 'B'],
  ['-.-.', 'C'],
  ['-..', 'D'],
  ['.', 'E'],
  ['..-.', 'F'],
  ['--.', 'G'],
  ['....', 'H'],
  ['..', 'I'],
  ['.---', 'J'],
  ['-.-', 'K'],
  ['.-..', 'L'],
  ['--', 'M'],
  ['-.', 'N'],
  ['---', 'O'],
  ['.--.', 'P'],
  ['--.-', 'Q'],
  ['.-.', 'R'],
  ['...', 'S'],
  ['-', 'T'],
  ['..-', 'U'],
  ['...-', 'V'],
  ['.--', 'W'],
  ['-..-', 'X'],
  ['-.--', 'Y'],
  ['--..', 'Z'],
]);

function getElement(id) {
  return document.getElementById(id);
}

function addInput(input) {
  userInput = userInput + input;
  morseCodeSequence = morseCodeSequence + input;
  morseCodeInput.innerHTML = morseCodeSequence;
}

function lookUpCode(code) {
  const letter = morseCodeMap.get(code);
  if (letter) {
    searchTerm = searchTerm + letter;
  }
}

const dot = getElement('dot');
const dash = getElement('dash');
const space = getElement('space');

const morseCodeInput = getElement('morse-code');
const letterOutput = getElement('letter-output');

dot.addEventListener('click', function () {
  addInput('.');
});

dash.addEventListener('click', function () {
  addInput('-');
});

space.addEventListener('click', function () {
  lookUpCode(userInput);
  userInput = '';
  letterOutput.innerHTML = searchTerm;
});
