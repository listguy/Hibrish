function main() {
  const hebrewInput = document.getElementById("hebrew-input");
  const englishInput = document.getElementById("english-input");

  hebrewInput.addEventListener("change", hebrewToEnglish);
  englishInput.addEventListener("change", englishToHebrew);
}

function hebrewToEnglish(event) {
  let value = event.target.value;
  setEnglishInputValue(event.target.value);
}

function setHebrewInputValue(value) {
  const hebrewInput = document.getElementById("hebrew-input");
  hebrewInput.value = value;
}

function setEnglishInputValue(value) {
  const englishInput = document.getElementById("english-input");
  englishInput.value = value;
}

function englishToHebrew(event) {
  let value = event.target.value;
  setHebrewInputValue(value);
}
main();
