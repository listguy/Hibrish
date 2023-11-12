function main() {
  const hebrishInput = document.getElementById("hebrish-input");

  hebrishInput.addEventListener("change", fixText);
}

function fixText(event) {
  let str = event.target.value;
  setFixedTextInput(convertCharacters(str));
}

function setFixedTextInput(fixedText) {
  const fixedInput = document.getElementById("fixed-input");
  fixedInput.value = fixedText;
}

export function convertCharacters(str) {
  let convertedStr = "";
  for (let c of str) {
    let convertedChar = QWERTY_BINDINGS[c];
    convertedStr += convertedChar ? convertedChar : c;
  }
  return convertedStr;
}
main();
