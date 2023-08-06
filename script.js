const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const letterCount = document.getElementById('letterCount');

textInput.addEventListener('input', () => {
  const text = textInput.value;
  const words = text.split(/\s+/).filter(word => word !== '');

  const letterRegex = /[A-Za-z]/g;
  const letters = text.match(letterRegex) || [];

  wordCount.textContent = words.length;
  letterCount.textContent = letters.length;
});
