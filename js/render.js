import symbols from './comps/keyboard.js';
import replacerRus from './comps/replacerRus.js';
import replacerEng from './comps/replacerEng.js';

// Keyboard render
const keyboard = `
    <div class="wrapper">
      <textarea type="text" class="keyboard__area" tabindex="0"></textarea>
      <section class="keyboard"></section>
    </div>
`;
document.querySelector('body').innerHTML += keyboard;
const wrapper = document.querySelector('.keyboard');
const area = document.querySelector('.keyboard__area');

// Add extends classes
function renderBtns() {
  const btn = document.querySelectorAll('.key');
  btn.forEach((item) => {
    switch (item.id) {
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
}
renderBtns();

// prevent for alt
function altPrevent(e) {
  if (e.code === 'AltLeft' || e.code === 'AltRight') {
    e.preventDefault();
  }
}

// Show press btn
function showPressBtn(e) {
  const btn = document.querySelectorAll('.key');
  btn.forEach((id) => {
    if (id.getAttribute('id') === e.code && e.code !== 'CapsLock') {
      id.classList.add('key--press');
    }
  });
  altPrevent(e);
}

// Hide unpress btn
function hidePressBtn(e) {
  const btn = document.querySelectorAll('.key');
  btn.forEach((id) => {
    if (id.getAttribute('id') === e.code && e.code !== 'CapsLock') {
      id.classList.remove('key--press');
    }
  });
  altPrevent(e);
}

// Check caps
function checkCaps(e) {
  const btn = document.querySelectorAll('.key');
  if (e.getModifierState('CapsLock')) {
    btn.forEach((caps) => {
      if (caps.getAttribute('id') === 'CapsLock') {
        caps.classList.add('key--capslock-active');
      }
    });
  } else {
    btn.forEach((caps) => {
      if (caps.getAttribute('id') === 'CapsLock') {
        caps.classList.remove('key--capslock-active');
      }
    });
  }
}

// Lang eng area
function changeRus(str) {
  return str.replace(/[А-яЁё]/g, (x) => replacerRus[x]);
}

// Lang rus area
function changeEng(str) {
  return str.replace(/[A-z]/g, (x) => replacerEng[x]);
}

// User text
const dataEng = '';
const dataRus = '';

// Lang change
function changeLanguage(e) {
  if (e.getModifierState('Control')
   && e.getModifierState('Shift')
   && localStorage.getItem('lang') === 'rus') {
    localStorage.setItem('lang', 'eng');
    area.value = '';

    wrapper.innerHTML = '';
    for (const key in symbols) {
      if (key !== null) {
        wrapper.innerHTML += `<div class="key" data-basic="${symbols[key].eng.basic}" data-alt="${symbols[key].eng.alt}" id="${key}">${symbols[key].eng.basic}</div>`;
      }
    }

    renderBtns();
    area.oninput = () => {
      area.value = changeRus(area.value);
      area.value = area.value.replace(/"/gi, '@');
      area.value = area.value.replace(/№/gi, '#');
      area.value = area.value.replace(/;/gi, '$');
      area.value = area.value.replace(/:/gi, '^');
      area.value = area.value.replace(/\?/gi, '&');
      area.value = area.value.replace(/\//gi, '|');
      localStorage.setItem('text', area.value);
    };
  } else if (e.getModifierState('Control')
          && e.getModifierState('Shift')
          && localStorage.getItem('lang') === 'eng') {
    localStorage.setItem('lang', 'rus');
    area.value = '';

    wrapper.innerHTML = '';
    for (const key in symbols) {
      if (key !== null) {
        wrapper.innerHTML += `<div class="key" data-basic="${symbols[key].rus.basic}" data-alt="${symbols[key].rus.alt}" id="${key}">${symbols[key].rus.basic}</div>`;
      }
    }
    renderBtns();
    area.oninput = () => {
      area.value = changeEng(area.value);
      area.value = area.value.replace(/@/gi, '"');
      area.value = area.value.replace(/#/gi, '№');
      area.value = area.value.replace(/\$/gi, ';');
      area.value = area.value.replace(/\^/gi, ':');
      area.value = area.value.replace(/&/gi, '?');
      area.value = area.value.replace(/\|/gi, '\\');
      localStorage.setItem('text', area.value);
    };
  }
}

// Tab fix
HTMLTextAreaElement.prototype.getCaretPosition = function () {
  return this.selectionStart;
};

HTMLTextAreaElement.prototype.setCaretPosition = function (position) {
  this.selectionStart = position;
  this.selectionEnd = position;
  this.focus();
};

area.onkeydown = (e) => {
  if (e.code === 'Tab') {
    const newCaretPosition = area.getCaretPosition() + '    '.length;
    area.value = `${area.value.substring(0, area.getCaretPosition())}    ${area.value.substring(area.getCaretPosition(), area.value.length)}`;
    area.setCaretPosition(newCaretPosition);
    return false;
  }
  return true;
};

// keydown listener
window.addEventListener('keydown', (e) => {
  showPressBtn(e);
  changeLanguage(e);
  checkCaps(e);
  area.focus();
});

// keyup listener
window.addEventListener('keyup', (e) => {
  hidePressBtn(e);
  area.focus();
});

// Check onload functions
window.addEventListener('load', () => {
  area.focus();
  if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'rus');
  }

  if (localStorage.getItem('lang') === 'rus') {
    wrapper.innerHTML = '';
    for (const key in symbols) {
      if (key !== null) {
        wrapper.innerHTML += `<div class="key" data-basic="${symbols[key].rus.basic}" data-alt="${symbols[key].rus.alt}" id="${key}">${symbols[key].rus.basic}</div>`;
      }
    }
    area.oninput = () => {
      area.value = changeEng(area.value);
      area.value = area.value.replace(/@/gi, '"');
      area.value = area.value.replace(/#/gi, '№');
      area.value = area.value.replace(/\$/gi, ';');
      area.value = area.value.replace(/\^/gi, ':');
      area.value = area.value.replace(/&/gi, '?');
      area.value = area.value.replace(/\|/gi, '\\');
      localStorage.setItem('text', area.value);
    };
    renderBtns();
  } else if (localStorage.getItem('lang') === 'eng') {
    wrapper.innerHTML = '';
    for (const key in symbols) {
      if (key !== null) {
        wrapper.innerHTML += `<div class="key" data-basic="${symbols[key].eng.basic}" data-alt="${symbols[key].eng.alt}" id="${key}">${symbols[key].eng.basic}</div>`;
      }
    }
    area.oninput = () => {
      area.value = changeRus(area.value);
      area.value = area.value.replace(/"/gi, '@');
      area.value = area.value.replace(/№/gi, '#');
      area.value = area.value.replace(/;/gi, '$');
      area.value = area.value.replace(/:/gi, '^');
      area.value = area.value.replace(/\?/gi, '&');
      area.value = area.value.replace(/\//gi, '|');
      localStorage.setItem('text', area.value);
    };
    renderBtns();
  }

  const btn = document.querySelectorAll('.key');
  if (btn !== null) {
    test();
  } 
});

function test() {
    btn.forEach((item) => {
    item.onclick = () => {
      area.focus();
      if(item.getAttribute('id') === 'Space') {
        area.value += ' ';
      } else if (item.getAttribute('id') === 'Tab') {
        area.value += '    ';
      } else if (item.getAttribute('id') === 'Enter') {
        area.value += '\n';
      } else if (item.getAttribute('id') === 'Backspace') {
        let arr = area.value.split('');
        arr.pop();
        area.value = arr.join('');
      } else if (item.getAttribute('id') === 'Delete') {
        console.log(area.getCaretPosition());
      } else {
        area.value += item.textContent;
      }
    };
  });
}
