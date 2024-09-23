const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
    addTodo();
});

// Function to add a new to-do
function addTodo() {
    const taskText = input.value.trim();
    if (taskText === '') return;

    // Create a new list item (li) for the task
    const li = document.createElement('li');
    li.innerHTML = `
        <span><img src="task-icon.png" alt="Task Icon"> ${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Add event listener for the delete button
    li.querySelector('.delete-btn').addEventListener('click', function () {
        li.remove();
    });

    // Append the new task to the list
    todoList.appendChild(li);

    // Clear the input field
    input.value = '';
}
