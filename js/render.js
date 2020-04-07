import symbols from './comps/keyboard.js';

// Keyboard render
const keyboard = `
    <div class="wrapper">
      <div class="language">Рус</div>
      <div class="language-info">Для смены языка используйте CTRL + ALT</div>
      <textarea type="text" class="keyboard__area" tabindex="0" placeholder="Создано в операционной системе Windows"></textarea>
      <section class="keyboard"></section>
    </div>
`;
document.querySelector('body').innerHTML += keyboard;
const wrapper = document.querySelector('.keyboard');
const area = document.querySelector('.keyboard__area');
const language = document.querySelector('.language');
const languageInfo = document.querySelector('.language-info');


for (const key in symbols) {
  if (key !== null) {
    wrapper.innerHTML += `<div class="key" data-rus="${symbols[key].rus.basic}"  data-eng="${symbols[key].eng.basic}" data-rus-alt="${symbols[key].rus.alt}" data-eng-alt="${symbols[key].eng.alt}" id="${key}">${symbols[key].rus.basic}</div>`;
  }
}
const btn = document.querySelectorAll('.key');
// Add extends classes
function renderBtns() {
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
  btn.forEach((id) => {
    if (id.getAttribute('id') === e.code && e.code !== 'CapsLock') {
      id.classList.add('key--press');
    }
  });
  altPrevent(e);
}

// Hide unpress btn
function hidePressBtn(e) {
  btn.forEach((id) => {
    if (id.getAttribute('id') === e.code && e.code !== 'CapsLock') {
      id.classList.remove('key--press');
    }
  });
  altPrevent(e);
}

// Check caps
function checkCaps(e) {
  if (e.code === 'CapsLock' && localStorage.getItem('caps') === 'on') {
    localStorage.setItem('caps', 'off');

    btn.forEach((caps) => {
      if (caps.getAttribute('id') === 'CapsLock') {
        caps.classList.remove('key--capslock-active');
      }
    });
  } else if (e.code === 'CapsLock' && localStorage.getItem('caps') === 'off') {
    localStorage.setItem('caps', 'on');

    btn.forEach((caps) => {
      if (caps.getAttribute('id') === 'CapsLock') {
        caps.classList.add('key--capslock-active');
      }

      switch (caps.getAttribute('id')) {
        case 'Tab':
          return false;

        case 'CapsLock':
          return false;

        case 'ShiftLeft':
          return false;

        case 'ShiftRight':
          return false;

        case 'ControlRight':
          return false;

        case 'ControlLeft':
          return false;

        case 'AltLeft':
          return false;

        case 'AltRight':
          return false;

        case 'Backspace':
          return false;

        case 'Delete':
          return false;

        case 'Enter':
          return false;

        case 'Space':
          return false;

        case 'MetaLeft':
          return false;

        default:
          caps.textContent.toUpperCase();
          break;
      }
      return true;
    });
  }
}

// Check caps onload
function checkCapsLoad() {
  if (localStorage.getItem('caps') === 'off') {
    setTimeout(() => {
      btn.forEach((caps, i) => {
        if (caps.getAttribute('id') === 'CapsLock') {
          caps.classList.remove('key--capslock-active');
        }

        switch (caps.getAttribute('id')) {
          case 'Tab':
            return false;

          case 'CapsLock':
            return false;

          case 'ShiftLeft':
            return false;

          case 'ShiftRight':
            return false;

          case 'ControlRight':
            return false;

          case 'ControlLeft':
            return false;

          case 'AltLeft':
            return false;

          case 'AltRight':
            return false;

          case 'Backspace':
            return false;

          case 'Delete':
            return false;

          case 'Enter':
            return false;

          case 'Space':
            return false;

          case 'MetaLeft':
            return false;

          default:
            btn[i].textContent = caps.textContent.toLowerCase();
            break;
        }
        return true;
      });
    }, 100);
  } else if (localStorage.getItem('caps') === 'on') {
    setTimeout(() => {
      btn.forEach((caps, i) => {
        if (caps.getAttribute('id') === 'CapsLock') {
          caps.classList.add('key--capslock-active');
        }

        switch (caps.getAttribute('id')) {
          case 'Tab':
            return false;

          case 'CapsLock':
            return false;

          case 'ShiftLeft':
            return false;

          case 'ShiftRight':
            return false;

          case 'ControlRight':
            return false;

          case 'ControlLeft':
            return false;

          case 'AltLeft':
            return false;

          case 'AltRight':
            return false;

          case 'Backspace':
            return false;

          case 'Delete':
            return false;

          case 'Enter':
            return false;

          case 'Space':
            return false;

          case 'MetaLeft':
            return false;

          default:
            btn[i].textContent = caps.textContent.toUpperCase();
            break;
        }
        return true;
      });
    }, 100);
  }
}

// Lang change
function changeLanguage(e) {
  if (e.getModifierState('Control')
   && e.getModifierState('Alt')
   && localStorage.getItem('lang') === 'rus') {
    localStorage.setItem('lang', 'eng');
    area.setAttribute('placeholder', 'Created on Windows operating system');
    language.textContent = 'Eng';
    languageInfo.textContent = 'Use CTRL + ALT to change language';
    language.classList.add('language--eng');
    btn.forEach((item, i) => {
      btn[i].textContent = item.getAttribute('data-eng');
    });
    checkCapsLoad();
  } else if (e.getModifierState('Control')
          && e.getModifierState('Alt')
          && localStorage.getItem('lang') === 'eng') {
    area.setAttribute('placeholder', 'Создано в операционной системе Windows');
    localStorage.setItem('lang', 'rus');
    language.textContent = 'Рус';
    languageInfo.textContent = 'Для смены языка используйте CTRL + ALT';
    language.classList.remove('language--eng');
    btn.forEach((item, i) => {
      btn[i].textContent = item.getAttribute('data-rus');
    });
    checkCapsLoad();
  }
}

// Special symb on
function specialSymbOn(e) {
  if (e.key === 'Shift' && localStorage.getItem('lang') === 'rus') {
    btn.forEach((item, i) => {
      btn[i].textContent = item.getAttribute('data-rus-alt');
    });
  } else if (e.key === 'Shift' && localStorage.getItem('lang') === 'eng') {
    btn.forEach((item, i) => {
      btn[i].textContent = item.getAttribute('data-eng-alt');
    });
  }
}

// Special symb off
function specialSymbOff(e) {
  if (e.key === 'Shift' && localStorage.getItem('lang') === 'rus') {
    btn.forEach((item, i) => {
      btn[i].textContent = item.getAttribute('data-rus');
    });
  } else if (e.key === 'Shift' && localStorage.getItem('lang') === 'eng') {
    btn.forEach((item, i) => {
      btn[i].textContent = item.getAttribute('data-eng');
    });
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

// User text
let userData = '';

// Tab fix
area.onkeydown = (e) => {
  if (e.code === 'Tab') {
    const newCaretPosition = area.getCaretPosition() + '    '.length;
    area.value = `${area.value.substring(0, area.getCaretPosition())}    ${area.value.substring(area.getCaretPosition(), area.value.length)}`;
    area.setCaretPosition(newCaretPosition);
    userData += '    ';
    return false;
  }
  return true;
};

// Add textarea value
function addValue(e) {
  btn.forEach((symb) => {
    if (symb.getAttribute('id') === e.code) {
      area.oninput = () => {
        switch (e.code) {
          case 'Tab':
            userData += '    ';
            break;

          case 'Space':
            userData += ' ';
            break;

          case 'CapsLock':
            userData += '';
            break;

          case 'ShiftLeft':
            userData += '';
            break;

          case 'ShiftRight':
            userData += '';
            break;

          case 'ControlLeft':
            userData += '';
            break;

          case 'ControlRight':
            userData += '';
            break;

          case 'AltLeft':
            userData += '';
            break;

          case 'AltRight':
            userData += '';
            break;

          case 'Backspace':
            userData = area.value;
            return false;

          case 'Delete':
            userData = area.value;
            return false;

          case 'Enter':
            userData += '\n';
            break;

          default:
            userData += symb.textContent;
            break;
        }
        area.value = '';
        area.value += userData;
        return true;
      };
    }
  });
}

// keydown listener
window.addEventListener('keydown', (e) => {
  showPressBtn(e);
  changeLanguage(e);
  checkCaps(e);
  specialSymbOn(e);
  addValue(e);
  area.focus();

  if (e.code === 'CapsLock') {
    btn.forEach((caps) => {
      if (caps.getAttribute('id') === 'CapsLock') {
        caps.classList.add('key--press');
      }
    });
  }
});

// keyup listener
window.addEventListener('keyup', (e) => {
  hidePressBtn(e);
  specialSymbOn(e);
  specialSymbOff(e);
  checkCapsLoad();
  area.focus();

  if (e.code === 'CapsLock') {
    btn.forEach((caps) => {
      if (caps.getAttribute('id') === 'CapsLock') {
        caps.classList.remove('key--press');
      }
    });
  }
});

// Backspace on click
function clickBackspace(str) {
  return str.slice(0, -1);
}

// Del on click
function clickDelete(str) {
  return str.slice(0, area.getCaretPosition());
}

// Click capslock
function clickCapsLock(active) {
  if (localStorage.getItem('caps') === 'off') {
    localStorage.setItem('caps', 'on');
    active.classList.add('key--capslock-active');
    checkCapsLoad();
  } else if (localStorage.getItem('caps') === 'on') {
    localStorage.setItem('caps', 'off');
    active.classList.remove('key--capslock-active');
    checkCapsLoad();
  }
}

// Click shift
function clickShift(active) {
  active.addEventListener('mousedown', () => {
    if (localStorage.getItem('lang') === 'rus') {
      btn.forEach((item, i) => {
        btn[i].textContent = item.getAttribute('data-rus-alt');
        return true;
      });
    } else if (localStorage.getItem('lang') === 'eng') {
      btn.forEach((item, i) => {
        btn[i].textContent = item.getAttribute('data-eng-alt');
      });
    }
  });

  active.addEventListener('mouseup', () => {
    if (localStorage.getItem('lang') === 'rus') {
      btn.forEach((item, i) => {
        btn[i].textContent = item.getAttribute('data-rus');
      });
    } else if (localStorage.getItem('lang') === 'eng') {
      btn.forEach((item, i) => {
        btn[i].textContent = item.getAttribute('data-eng');
      });
    }
  });
}

// Click btns
function clickBtns() {
  btn.forEach((item) => {
    item.addEventListener('click', (e) => {
      area.focus();
      e.preventDefault();
    });

    item.addEventListener('mousedown', () => {
      item.classList.add('key--press');
      area.focus();
      switch (item.getAttribute('id')) {
        case 'Tab':
          userData += '    ';
          break;

        case 'Space':
          userData += ' ';
          break;

        case 'CapsLock':
          userData += '';
          clickCapsLock(item);
          break;

        case 'MetaLeft':
          userData += '';
          break;

        case 'ShiftLeft':
          userData += '';
          clickShift(item);
          break;

        case 'ShiftRight':
          userData += '';
          clickShift(item);
          break;

        case 'ControlLeft':
          userData += '';
          break;

        case 'ControlRight':
          userData += '';
          break;

        case 'AltLeft':
          userData += '';
          break;

        case 'AltRight':
          userData += '';
          break;

        case 'Backspace':
          userData = clickBackspace(userData);
          break;

        case 'Delete':
          userData = clickDelete(userData);
          break;

        case 'Enter':
          userData += '\n';
          break;

        case '←':
          userData += '←aa';
          break;

        default:
          userData += item.textContent;
          break;
      }
      area.value = userData;
    });

    item.addEventListener('mouseup', () => {
      item.classList.remove('key--press');
    });
  });
}


// Onload functions
window.addEventListener('load', () => {
  area.focus();
  if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'rus');
  }

  if (localStorage.getItem('caps') === null) {
    localStorage.setItem('caps', 'off');
  }

  checkCapsLoad();

  if (localStorage.getItem('lang') === 'rus') {
    area.setAttribute('placeholder', 'Создано в операционной системе Windows');
    language.textContent = 'Рус';
    languageInfo.textContent = 'Для смены языка используйте CTRL + ALT';
    language.classList.remove('language--eng');
    btn.forEach((item, i) => {
      btn[i].textContent = item.getAttribute('data-rus');
    });
  } else if (localStorage.getItem('lang') === 'eng') {
    area.setAttribute('placeholder', 'Created on Windows operating system');
    language.textContent = 'Eng';
    languageInfo.textContent = 'Use CTRL + ALT to change language';
    language.classList.add('language--eng');
    btn.forEach((item, i) => {
      btn[i].textContent = item.getAttribute('data-eng');
    });
  }

  if (btn !== null) {
    clickBtns();
  }
});
