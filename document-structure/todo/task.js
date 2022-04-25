const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const button = document.getElementById('tasks__add');

const addTask = () => {
  tasksList.innerHTML += `<div class="task">
    <div class="task__title">
      ${taskInput.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;
  taskInput.value = '';
};

taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && taskInput.value.trim() !== '') {
    addTask();
  }
});

button.addEventListener('click', (e) => {
  e.preventDefault();
  if (taskInput.value.trim() !== '') {
    addTask();
  }
});

tasksList.addEventListener('click', ({ target }) => {
  if (target.classList.contains('task__remove')) {
    target.closest('.task').remove();
  }
});
