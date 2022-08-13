import Alltask from './modules/module1.js';
import Status from './modules/module2.js';

class TaskList {
  constructor(doings = []) {
    this.doings = doings;
  }

  listFormat() {
    const todos = document.getElementsByClassName('to-dos');

    if (todos) {
      todos[0].innerHTML = '';
    }

    this.doings.forEach((lis) => {
      const eachList = [];
      const eachcheck = [];
      const eachParag = [];
      const eachbtn = [];
      const checkNparagDiv = [];

      // create editable List
      eachList[lis.index] = document.createElement('li');
      eachList[lis.index].contentEditable = true;
      eachList[lis.index].setAttribute('id', lis.index);
      eachList[lis.index].classList.add('indList');

      // create check
      eachcheck[lis.index] = document.createElement('input');
      eachcheck[lis.index].setAttribute('type', 'checkbox');
      eachcheck[lis.index].classList.add('checkbox');
      eachcheck[lis.index].setAttribute('id', lis.index);

      // create paragraph
      eachParag[lis.index] = document.createElement('p');
      /// ///////////////////////////////
      eachParag[lis.index].textContent = lis.description;
      eachParag[lis.index].setAttribute('id', lis.index);
      eachParag[lis.index].classList.add('eachParag');

      // create button
      eachbtn[lis.index] = document.createElement('button');
      eachbtn[lis.index].setAttribute('id', lis.index);
      eachbtn[lis.index].innerHTML = '<i class="fa-solid fa-trash"></i>';

      // Div
      checkNparagDiv[lis.index] = document.createElement('div');
      checkNparagDiv[lis.index].append(eachcheck[lis.index], eachParag[lis.index]);
      eachParag[lis.index].classList.add('checkNparagDiv');

      // appending check, paragraph and button
      eachList[lis.index].append(eachcheck[lis.index], eachParag[lis.index], eachbtn[lis.index]);

      // appending each list
      todos[0].append(eachList[lis.index]);

      // On editing paragraph
      eachParag[lis.index].addEventListener('click', (e) => {
        e.target.nextSibling.innerHTML = '<i class="fa-solid fa-trash"></i>';
        e.target.nextSibling.style.cursor = 'pointer';
        eachList[lis.index].style.backgroundColor = '#a6bdbe';
        e.target.nextSibling.addEventListener('click', () => {
          this.delete(eachList[lis.index]);
        });
      });

      eachbtn[lis.index].addEventListener('click', () => {
        this.delete(eachList[lis.index]);
      });

      eachList[lis.index].addEventListener('mouseleave', (eve) => {
        eachbtn[lis.index].innerHTML = '<i class="fa-solid fa-trash"></i>';
        this.update(eve.target.id, eve.target.innerText);
      });

      // Listen for checking elements
      eachcheck[lis.index].addEventListener('change', (e) => {
        const status = new Status();
        if (e.target.checked === true) {
          status.checked(this.doings[lis.index]);
        } else {
          status.unchecked(this.doings[lis.index]);
        }

        this.update(e.target.nextSibling.id, e.target.nextSibling.innerText);
      });

      // conditions after checking
      if (this.doings[lis.index].completed === true) {
        eachcheck[lis.index].setAttribute('checked', 'checked');
        eachList[lis.index].classList.add('checked');
      } else if (this.doings[lis.index].completed === false) {
        eachcheck[lis.index].removeAttribute('checked');
        eachList[lis.index].classList.remove('checked');
      }
    });
  }

  add(description, completed, index) {
    const allTask = new Alltask(description, completed, index);
    this.doings.push(allTask);
  }

  delete(num) {
    const key = num;
    if (this.doings.length === 1) {
      this.doings = [];
    } else {
      this.doings.splice(key, 1);
    }
    this.doings.forEach((lis, index) => {
      lis.index = index;
    });
    this.listFormat();
  }

  update(indexList, description) {
    if (this.doings[indexList].index === Number(indexList)) {
      this.doings[indexList].description = description;
    }
    this.doings.forEach((lis, index) => {
      lis.index = index;
    });
    this.listFormat();
  }

  clearAllCompleted() {
    this.doings = this.doings.filter((element) => element.completed === false);
    localStorage.setItem('storedlist', JSON.stringify(this.doings));
    window.location.reload();
  }
}

let index = 0;
const completed = false;
const taskList = new TaskList();

const clearAllComptd = document.querySelector('.clear');
clearAllComptd.addEventListener('click', () => {
  taskList.clearAllCompleted();
});

const enterBtn = document.getElementById('enter');
const input = document.getElementById('theinput');
enterBtn.addEventListener('click', () => {
  if (!input.value.trim()) {
    // !input.value
  } else {
    taskList.add(input.value, completed, index);
    taskList.listFormat();
    input.value = '';
    index += 1;
  }
  localStorage.setItem('storedlist', JSON.stringify(taskList.doings));
});

// keyboard Enter button support
window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    enterBtn.click();
  }
  localStorage.setItem('storedlist', JSON.stringify(taskList.doings));
});

window.addEventListener('load', () => {
  taskList.doings = JSON.parse(localStorage.getItem('storedlist'));
  if (taskList.doings) {
    taskList.listFormat();
  } else {
    taskList.doings = [];
  }
});