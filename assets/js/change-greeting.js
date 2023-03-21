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
  'Hei'
]



document.addEventListener('DOMContentLoaded', () => {
  let idx = 0;
  const elem = document.getElementById("greeting");
  const intervalId = setInterval(changeGreeting, 3500);

  function changeGreeting() {
    elem.textContent = greetings[idx];
    idx < greetings.length ? idx++ : idx = 0;
  }
})
