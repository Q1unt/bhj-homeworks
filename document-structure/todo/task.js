const inputTask = document.getElementById('task__input');
const addTask = document.querySelector('.tasks__add');
const taskList = document.querySelector('.tasks__list');

// Добавить задачу через 'клик' по кнопке Добавить
addTask.addEventListener('click', function(event) {
    event.preventDefault();
    if(inputTask.value.trim() === '') {
        return;
    }
    taskList.innerHTML += `
        <div class="task">
            <div class="task__title">
                ${inputTask.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `;
    inputTask.value = '';
});


// Удаление задач при 'клике' на кнопку Удалить (крестик)
taskList.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('task__remove')) {
        const taskTargetItem = target.closest('.task');
        taskTargetItem.remove();
    }
});