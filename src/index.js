import './style.css';

const theToDos = [
  {
    description: 'i want to eat',
    completed: false,
    index: 0,
  },
  {
    description: 'i want to cook',
    completed: false,
    index: 1,
  },
  {
    description: 'i need to sleep',
    completed: false,
    index: 2,
  },
];

const todos = document.getElementsByClassName('to-dos');

todos[0].innerHTML = '';
for (let i = 0; i < theToDos.length; i += 1) {
  todos[0].innerHTML += `
            <div class="todo-container">
            <div class="check-descrip">
            <i class="fa-regular fa-square"></i>
            <div class="descripti">${theToDos[i].description}</div></div>
           <div class="ellipsis">
               <i class="fa-solid fa-ellipsis-vertical" id="ellip"></i>
            </div>
         </div>`;
}