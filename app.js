window.addEventListener('load', () => {
	const form = document.querySelector("#NewTaskForm");
	const input = document.querySelector("#NewTaskInput");
	const list_el = document.querySelector("#Tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('Task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('Content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('Text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('Actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('Edit');
		task_edit_el.innerText = 'Редактировать';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('Delete');
		task_delete_el.innerText = 'Удалить';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "редактировать") {
				task_edit_el.innerText = "Сохранить";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Редактировать";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});