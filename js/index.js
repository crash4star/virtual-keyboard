// Наборы символов

const rus = 'йцукенгшщзхъфывапролджэячсмитьбю';


const engSymb = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'left', 'down', 'right', 'Ctrl'];

const engSymbAlternate = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'left', 'down', 'right', 'Ctrl'];

const rusSymb = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'left', 'down', 'right', 'Ctrl'];

const rusSymbAlternate = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'left', 'down', 'right', 'Ctrl'];

const alterRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'left', 'down', 'right', 'Ctrl', 'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'left', 'down', 'right', 'Ctrl'];

const alterEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'left', 'down', 'right', 'Ctrl', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'left', 'down', 'right', 'Ctrl'];

const dataKeys = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];


// Добавление обертки
const keyboard = `
    <div class="wrapper">
      <textarea type="text" class="keyboard__area"></textarea>
      <section class="keyboard"></section>
    </div>
`;
document.querySelector('body').innerHTML += keyboard;

// Добавление изначального состояния клавиатуры
const wrapper = document.querySelector('.keyboard');

engSymb.forEach((symb, i) => {
  wrapper.innerHTML += `<div data-key="${dataKeys[i]}" class="key">${symb}</div>`;
});


// Добавление опциональным кнопказ доп. классов
const btn = document.querySelectorAll('.key');

btn.forEach((item) => {
  const attr = item.getAttribute('data-key');

  switch (attr) {
    case 'Backspace':
      item.classList.add('key--backspace');
      break;

    case 'Tab':
      item.classList.add('key--tab');
      break;

    case 'CapsLock':
      item.classList.add('key--capslock');
      break;

    case 'Enter':
      item.classList.add('key--enter');
      break;

    case 'ShiftLeft':
      item.classList.add('key--shift');
      break;

    case 'ShiftRight':
      item.classList.add('key--shift');
      break;

    case 'Space':
      item.classList.add('key--space');
      break;

    default:
      break;
  }
});


// Отображение нужных символов в area
const area = document.querySelector('.keyboard__area');

let data = [];

function correctSymbols(symbols) {
  let result = [];
  if (localStorage.getItem('lang') === 'eng') {
    symbols.split('').forEach((item) => {
      if (alterRus.indexOf(item)) {
        result.push(alterEng[alterRus.indexOf(item)]);
      } else if (item === 'ё') {
        result.push('`');
      } else {
        result.push(item);
      }
    });
  }
  return result;
};

area.oninput = function () {
  data = this.value;
  alert(this.value.split('').join(''))
};

// Работа кнопок
document.addEventListener('keydown', function (e) {
  const key = document.querySelectorAll('.key');
  area.focus();

  key.forEach((btn) => {
    const btnKey = btn.getAttribute('data-key');
    if (event.code == btnKey && event.code != 'CapsLock') {
      btn.classList.add('key--press');
      this.onkeyup = (e) => {
        key.forEach((btn) => {
          if (e.code == btnKey && e.code != 'CapsLock') {
            btn.classList.remove('key--press');
          }
        });
      };
    }
  });
});


// Переключение языка
const langBtns = document.querySelectorAll('.key');
document.addEventListener('keydown', (e) => {
  if (e.getModifierState('Control') && e.getModifierState('Shift')) {
    if (localStorage.getItem('lang') === 'eng') {
      localStorage.setItem('lang', 'rus');

      langBtns.forEach((lang, i) => {
        lang.textContent = rusSymb[i];
      });
    } else {
      localStorage.setItem('lang', 'eng');

      langBtns.forEach((lang, i) => {
        lang.textContent = engSymb[i];
      });
    }
  }
});


// Caps включен
function getUpperCase() {
  if (localStorage.getItem('lang') === 'eng') {
    langBtns.forEach((lang, i) => {
      const data = lang.getAttribute('data-key');

      if (data === 'Backspace' || data === 'Tab' || data === 'Delete' || data === 'CapsLock' || data === 'Enter' || data === 'ShiftLeft' || data === 'ShiftRight' || data === 'ControlLeft' || data === 'ControlRight' || data === 'AltLeft' || data === 'AltRight' || data === 'MetaLeft') {
        lang.textContent = engSymb[i];
      } else {
        lang.textContent = engSymb[i].toUpperCase();
      }
    });
  } else {
    langBtns.forEach((lang, i) => {
      const data = lang.getAttribute('data-key');

      if (data === 'Backspace' || data === 'Tab' || data === 'Delete' || data === 'CapsLock' || data === 'Enter' || data === 'ShiftLeft' || data === 'ShiftRight' || data === 'ControlLeft' || data === 'ControlRight' || data === 'AltLeft' || data === 'AltRight' || data === 'MetaLeft') {
        lang.textContent = rusSymb[i];
      } else {
        lang.textContent = rusSymb[i].toUpperCase();
      }
    });
  }
}


// Caps выключен
function getLowerCase() {
  if (localStorage.getItem('lang') === 'eng') {
    langBtns.forEach((lang, i) => {
      const data = lang.getAttribute('data-key');

      if (data === 'Backspace' || data === 'Tab' || data === 'Delete' || data === 'CapsLock' || data === 'Enter' || data === 'ShiftLeft' || data === 'ShiftRight' || data === 'ControlLeft' || data === 'ControlRight' || data === 'AltLeft' || data === 'AltRight' || data === 'MetaLeft') {
        lang.textContent = engSymb[i];
      } else {
        lang.textContent = engSymb[i].toLowerCase();
      }
    });
  } else {
    langBtns.forEach((lang, i) => {
      const data = lang.getAttribute('data-key');

      if (data === 'Backspace' || data === 'Tab' || data === 'Delete' || data === 'CapsLock' || data === 'Enter' || data === 'ShiftLeft' || data === 'ShiftRight' || data === 'ControlLeft' || data === 'ControlRight' || data === 'AltLeft' || data === 'AltRight' || data === 'MetaLeft') {
        lang.textContent = rusSymb[i];
      } else {
        lang.textContent = rusSymb[i].toLowerCase();
      }
    });
  }
}


document.addEventListener('keydown', (e) => {
  const key = document.querySelectorAll('.key');

  // Проверка состояния caps lock
  if (e.getModifierState('CapsLock')) {
    key.forEach((btn) => {
      if (btn.getAttribute('data-key') === 'CapsLock') {
        btn.style.background = 'green';
      }
    });
    getUpperCase();
  } else {
    key.forEach((btn) => {
      if (btn.getAttribute('data-key') === 'CapsLock') {
        btn.style.background = '';
      }
    });
    getLowerCase();
  }

  // Отмена alt
  if (e.key === 'Alt') {
    e.preventDefault();
  }
});


// Клик по tab
HTMLTextAreaElement.prototype.getCaret = function () {
  return this.selectionStart;
};

HTMLTextAreaElement.prototype.setCaret = function (position) {
  this.selectionStart = position;
  this.selectionEnd = position;
  this.focus();
};


window.onkeydown = function (e) {
  if (e.key === 'Tab') {
    let newCaretPosition = 0;

    newCaretPosition = area.getCaret() + '    '.length;
    area.value = `${area.value.substring(0, area.getCaret())}    ${area.value.substring(area.getCaret(), area.value.length)}`;
    area.setCaret(newCaretPosition);
    return false;
  }
};


window.addEventListener('load', (e) => {
  // Проверка языка при загрузке страницы
  if (localStorage.getItem('lang') === 'eng') {
    langBtns.forEach((lang, i) => {
      lang.textContent = engSymb[i];
    });
  } else {
    langBtns.forEach((lang, i) => {
      lang.textContent = rusSymb[i];
    });
  }
});
