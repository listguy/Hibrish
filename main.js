function main() {
  const hebrewInput = document.getElementById("hebrew-input");
  const englishInput = document.getElementById("english-input");

  hebrewInput.addEventListener("change", hebrewToEnglish);
  englishInput.addEventListener("change", englishToHebrew);
}

function hebrewToEnglish(event) {
  let str = event.target.value;
  setEnglishInputValue(convertCharacters(str));
}

function englishToHebrew(event) {
  let str = event.target.value;
  setHebrewInputValue(convertCharacters(str));
}

function setHebrewInputValue(value) {
  const hebrewInput = document.getElementById("hebrew-input");
  hebrewInput.value = value;
}

function setEnglishInputValue(value) {
  const englishInput = document.getElementById("english-input");
  englishInput.value = value;
}

function convertCharacters(str) {
  let convertedStr = "";
  for (let c of str) {
    let convertedChar = QWERTY_BINDINGS[c];
    convertedStr += convertedChar ? convertedChar : c;
  }
  return convertedStr;
}
main();
