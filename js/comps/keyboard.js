const symbols = {
  Backquote: {
    rus: {
      basic: 'ё',
      alt: 'Ё',
    },
    eng: {
      basic: '`',
      alt: '~',
    },
  },
  Digit1: {
    rus: {
      basic: '1',
      alt: '!',
    },
    eng: {
      basic: '1',
      alt: '!',
    },
  },
  Digit2: {
    rus: {
      basic: '2',
      alt: '"',
    },
    eng: {
      basic: '2',
      alt: '@',
    },
  },
  Digit3: {
    rus: {
      basic: '3',
      alt: '№',
    },
    eng: {
      basic: '3',
      alt: '#',
    },
  },
  Digit4: {
    rus: {
      basic: '4',
      alt: ';',
    },
    eng: {
      basic: '4',
      alt: '$',
    },
  },
  Digit5: {
    rus: {
      basic: '5',
      alt: '%',
    },
    eng: {
      basic: '5',
      alt: '%',
    },
  },
  Digit6: {
    rus: {
      basic: '6',
      alt: ':',
    },
    eng: {
      basic: '6',
      alt: '^',
    },
  },
  Digit7: {
    rus: {
      basic: '7',
      alt: '?',
    },
    eng: {
      basic: '7',
      alt: '&',
    },
  },
  Digit8: {
    rus: {
      basic: '8',
      alt: '*',
    },
    eng: {
      basic: '8',
      alt: '*',
    },
  },
  Digit9: {
    rus: {
      basic: '9',
      alt: '(',
    },
    eng: {
      basic: '9',
      alt: '(',
    },
  },
  Digit0: {
    rus: {
      basic: '0',
      alt: ')',
    },
    eng: {
      basic: '0',
      alt: ')',
    },
  },
  Minus: {
    rus: {
      basic: '-',
      alt: '_',
    },
    eng: {
      basic: '-',
      alt: '_',
    },
  },
  Equal: {
    rus: {
      basic: '=',
      alt: '+',
    },
    eng: {
      basic: '=',
      alt: '+',
    },
  },
  Backspace: {
    rus: {
      basic: 'Backspace',
      alt: 'Backspace',
    },
    eng: {
      basic: 'Backspace',
      alt: 'Backspace',
    },
  },
  Tab: {
    rus: {
      basic: 'Tab',
      alt: 'Tab',
    },
    eng: {
      basic: 'Tab',
      alt: 'Tab',
    },
  },
  KeyQ: {
    rus: {
      basic: 'й',
      alt: 'Й',
    },
    eng: {
      basic: 'q',
      alt: 'Q',
    },
  },
  KeyW: {
    rus: {
      basic: 'ц',
      alt: 'Ц',
    },
    eng: {
      basic: 'w',
      alt: 'W',
    },
  },
  KeyE: {
    rus: {
      basic: 'у',
      alt: 'У',
    },
    eng: {
      basic: 'e',
      alt: 'E',
    },
  },
  KeyR: {
    rus: {
      basic: 'к',
      alt: 'К',
    },
    eng: {
      basic: 'r',
      alt: 'R',
    },
  },
  KeyT: {
    rus: {
      basic: 'е',
      alt: 'Е',
    },
    eng: {
      basic: 't',
      alt: 'T',
    },
  },
  KeyY: {
    rus: {
      basic: 'н',
      alt: 'Н',
    },
    eng: {
      basic: 'y',
      alt: 'Y',
    },
  },
  KeyU: {
    rus: {
      basic: 'г',
      alt: 'Г',
    },
    eng: {
      basic: 'u',
      alt: 'U',
    },
  },
  KeyI: {
    rus: {
      basic: 'ш',
      alt: 'ш',
    },
    eng: {
      basic: 'i',
      alt: 'I',
    },
  },
  KeyO: {
    rus: {
      basic: 'щ',
      alt: 'Щ',
    },
    eng: {
      basic: 'o',
      alt: 'O',
    },
  },
  KeyP: {
    rus: {
      basic: 'з',
      alt: 'З',
    },
    eng: {
      basic: 'p',
      alt: 'P',
    },
  },
  BracketLeft: {
    rus: {
      basic: 'х',
      alt: 'Х',
    },
    eng: {
      basic: '[',
      alt: '{',
    },
  },
  BracketRight: {
    rus: {
      basic: 'ъ',
      alt: 'Ъ',
    },
    eng: {
      basic: ']',
      alt: '}',
    },
  },
  Backslash: {
    rus: {
      basic: '\\',
      alt: '/',
    },
    eng: {
      basic: '\\',
      alt: '|',
    },
  },
  Delete: {
    rus: {
      basic: 'Delete',
      alt: 'Delete',
    },
    eng: {
      basic: 'Delete',
      alt: 'Delete',
    },
  },
  CapsLock: {
    rus: {
      basic: 'CapsLock',
      alt: 'CapsLock',
    },
    eng: {
      basic: 'CapsLock',
      alt: 'CapsLock',
    },
  },
  KeyA: {
    rus: {
      basic: 'ф',
      alt: 'Ф',
    },
    eng: {
      basic: 'a',
      alt: 'A',
    },
  },
  KeyS: {
    rus: {
      basic: 'ы',
      alt: 'Ы',
    },
    eng: {
      basic: 's',
      alt: 'S',
    },
  },
  KeyD: {
    rus: {
      basic: 'в',
      alt: 'В',
    },
    eng: {
      basic: 'd',
      alt: 'D',
    },
  },
  KeyF: {
    rus: {
      basic: 'а',
      alt: 'А',
    },
    eng: {
      basic: 'f',
      alt: 'F',
    },
  },
  KeyG: {
    rus: {
      basic: 'п',
      alt: 'П',
    },
    eng: {
      basic: 'g',
      alt: 'G',
    },
  },
  KeyH: {
    rus: {
      basic: 'р',
      alt: 'Р',
    },
    eng: {
      basic: 'h',
      alt: 'H',
    },
  },
  KeyJ: {
    rus: {
      basic: 'о',
      alt: 'О',
    },
    eng: {
      basic: 'j',
      alt: 'J',
    },
  },
  KeyK: {
    rus: {
      basic: 'л',
      alt: 'Л',
    },
    eng: {
      basic: 'k',
      alt: 'K',
    },
  },
  KeyL: {
    rus: {
      basic: 'д',
      alt: 'Д',
    },
    eng: {
      basic: 'l',
      alt: 'L',
    },
  },
  Semicolon: {
    rus: {
      basic: 'ж',
      alt: 'Ж',
    },
    eng: {
      basic: ';',
      alt: ':',
    },
  },
  Quote: {
    rus: {
      basic: 'э',
      alt: 'Э',
    },
    eng: {
      basic: '\'',
      alt: '"',
    },
  },
  Enter: {
    rus: {
      basic: 'Enter',
      alt: 'Enter',
    },
    eng: {
      basic: 'Enter',
      alt: 'Enter',
    },
  },
  ShiftLeft: {
    rus: {
      basic: 'Shift',
      alt: 'Shift',
    },
    eng: {
      basic: 'Shift',
      alt: 'Shift',
    },
  },
  KeyZ: {
    rus: {
      basic: 'я',
      alt: 'Я',
    },
    eng: {
      basic: 'z',
      alt: 'Z',
    },
  },
  KeyX: {
    rus: {
      basic: 'ч',
      alt: 'Ч',
    },
    eng: {
      basic: 'x',
      alt: 'X',
    },
  },
  KeyC: {
    rus: {
      basic: 'с',
      alt: 'С',
    },
    eng: {
      basic: 'c',
      alt: 'C',
    },
  },
  KeyV: {
    rus: {
      basic: 'м',
      alt: 'М',
    },
    eng: {
      basic: 'v',
      alt: 'V',
    },
  },
  KeyB: {
    rus: {
      basic: 'и',
      alt: 'И',
    },
    eng: {
      basic: 'b',
      alt: 'B',
    },
  },
  KeyN: {
    rus: {
      basic: 'т',
      alt: 'Т',
    },
    eng: {
      basic: 'n',
      alt: 'N',
    },
  },
  KeyM: {
    rus: {
      basic: 'ь',
      alt: 'Ь',
    },
    eng: {
      basic: 'm',
      alt: 'M',
    },
  },
  Comma: {
    rus: {
      basic: 'б',
      alt: 'Б',
    },
    eng: {
      basic: ',',
      alt: '<',
    },
  },
  Period: {
    rus: {
      basic: 'ю',
      alt: 'Ю',
    },
    eng: {
      basic: '.',
      alt: '>',
    },
  },
  Slash: {
    rus: {
      basic: '.',
      alt: ',',
    },
    eng: {
      basic: '/',
      alt: '?',
    },
  },
  ArrowUp: {
    rus: {
      basic: '↑',
      alt: '↑',
    },
    eng: {
      basic: '↑',
      alt: '↑',
    },
  },
  ShiftRight: {
    rus: {
      basic: 'Shift',
      alt: 'Shift',
    },
    eng: {
      basic: 'Shift',
      alt: 'Shift',
    },
  },
  ControlLeft: {
    rus: {
      basic: 'Ctrl',
      alt: 'Ctrl',
    },
    eng: {
      basic: 'Ctrl',
      alt: 'Ctrl',
    },
  },
  MetaLeft: {
    rus: {
      basic: 'Win',
      alt: 'Win',
    },
    eng: {
      basic: 'Win',
      alt: 'Win',
    },
  },
  AltLeft: {
    rus: {
      basic: 'Alt',
      alt: 'Alt',
    },
    eng: {
      basic: 'Alt',
      alt: 'Alt',
    },
  },
  Space: {
    rus: {
      basic: 'Space',
      alt: 'Space',
    },
    eng: {
      basic: 'Space',
      alt: 'Space',
    },
  },
  AltRight: {
    rus: {
      basic: 'Alt',
      alt: 'Alt',
    },
    eng: {
      basic: 'Alt',
      alt: 'Alt',
    },
  },
  ArrowLeft: {
    rus: {
      basic: '←',
      alt: '←',
    },
    eng: {
      basic: '←',
      alt: '←',
    },
  },
  ArrowDown: {
    rus: {
      basic: '↓',
      alt: '↓',
    },
    eng: {
      basic: '↓',
      alt: '↓',
    },
  },
  ArrowRight: {
    rus: {
      basic: '→',
      alt: '→',
    },
    eng: {
      basic: '→',
      alt: '→',
    },
  },
  ControlRight: {
    rus: {
      basic: 'Ctrl',
      alt: 'Ctrl',
    },
    eng: {
      basic: 'Ctrl',
      alt: 'Ctrl',
    },
  },
};


export default symbols;
