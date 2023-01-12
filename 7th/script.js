const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById(
  'final-message-reveal-word'
);

const figureParts = document.querySelectorAll('figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

console.log(selectedWord);

const correctLetter = ['w', 'i', 'z', 'a', 'r', 'd'];
const wrongLetter = [];

// Show hidden word
function displayword() {
  wordEl.innerHTML = `${selectedWord.split('').map((letter) =>
    `
        <span class="letter">
          ${correctLetter.includes(letter) ? letter : ''}
        </span>
      `.join('')
  )}`;

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulation! You won!';
    popup.style.display = 'flex';
  }
}

displayword();
