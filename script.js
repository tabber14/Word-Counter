const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');

textInput.addEventListener('input', () => {
  const text = textInput.value;
  const words = text.split(/\s+/).filter(word => word !== '');
  wordCount.textContent = words.length;
});
