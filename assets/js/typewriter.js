/*
Hello in:
  English
  Kiswahili
  French
  Filipino
  Igbo
  German
  Hindi - Namaste
  Sesotho
  Italian
  Japanese - Konichiwa
  Kinyarwanda
  Mexican/Spanish
  Korean - Anyeong haseyo
  Afrikaans/Dutch
  Portuguese(Brazilian & Portugal)
  Mandarin - Nǐ hǎo
  Danish
  Hawaiian
  Finnish
*/

const greetings = [
  'Hi',
  'Sasa',
  'Bonjour',
  'Kumusta',
  'Ndewo',
  'Guten tag',
  'नमस्ते',
  'Dumela',
  'Ciao',
  'こんにちは',
  'Mwaramutse',
  'Hola',
  '안녕하세요',
  'Hallo',
  'Olá',
  '你好',
  'Hej',
  'Aloha',
  'Hei',
];

const elem = document.getElementById('greeting');
let idx = 0;

function changeGreeting() {
  const greeting = greetings[idx];
  let intvlId = setInterval(removeChar, 1500 / elem.textContent.length);

  let i = elem.textContent.length - 1;

  function addChar() {
    if (greeting[i]) {
      elem.textContent += greeting[i];
    }

    if (i < greeting.length - 1) {
      i += 1;
    } else {
      clearInterval(intvlId);
    }
  }

  function removeChar() {
    elem.textContent = elem.textContent.slice(0, i);

    if (i > 0) {
      i -= 1;
    } else {
      clearInterval(intvlId);
      intvlId = setInterval(addChar, 1500 / greeting.length);
    }
  }

  // Move pointer to next greeting
  if (idx < greetings.length - 1) {
    idx += 1;
  } else {
    idx = 0;
  }
}

export default function typewriter() {
  setInterval(changeGreeting, 3500);
}
