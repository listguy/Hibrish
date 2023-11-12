const QWERTY_BINDINGS = {
  a: "ש",
  b: "נ",
  c: "ב",
  d: "ג",
  e: "ק",
  f: "כ",
  g: "ע",
  h: "י",
  i: "ן",
  j: "ח",
  k: "ל",
  l: "ך",
  m: "צ",
  n: "מ",
  o: "ם",
  p: "פ",
  q: "/",
  r: "ר",
  s: "ד",
  t: "א",
  u: "ו",
  v: "ה",
  w: "'",
  x: "ס",
  y: "ט",
  z: "ז",
  ";": "ף",
  ",": "ת",
  ".": "ץ",
  ש: "a",
  נ: "b",
  ב: "c",
  ג: "d",
  ק: "e",
  כ: "f",
  ע: "g",
  י: "h",
  ן: "i",
  ח: "j",
  ל: "k",
  ך: "l",
  צ: "m",
  מ: "n",
  ם: "o",
  פ: "p",
  "/": "q",
  ר: "r",
  ד: "s",
  א: "t",
  ו: "u",
  ה: "v",
  "'": "w",
  ס: "x",
  ט: "y",
  ז: "z",
  ף: ";",
  ת: ",",
  ץ: ".",
};

chrome.runtime.onMessage.addListener(onReceivedMessage);

const hibrishPopup = document.createElement("hibrish-popup");
document.body.appendChild(hibrishPopup);

function onReceivedMessage(message, sender, sendResponse) {
  const { hibrishText } = message;
  navigator.clipboard.writeText(convertCharacters(hibrishText)).then(() => {
    setPopupPosition(getPopupNewPosition());
    setTimeout(hidePopup, 1500);
  });
}

function convertCharacters(str) {
  let convertedStr = "";
  for (let c of str) {
    let convertedChar = QWERTY_BINDINGS[c];
    convertedStr += convertedChar ? convertedChar : c;
  }
  return convertedStr;
}

function setPopupPosition(position) {
  hibrishPopup.setAttribute("position", JSON.stringify(position));
}

function hidePopup() {
  setPopupPosition({ display: "none" });
}

function getPopupNewPosition() {
  const selectionBounds = window.getSelection().getRangeAt(0).getBoundingClientRect();
  return {
    left: selectionBounds.left + selectionBounds.width / 2,
    top: selectionBounds.top - 5,
    display: "flex",
  };
}
