document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    
    // Create a new list item
    const listItem = document.createElement('li');
    
    // Create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);
    
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    };
    listItem.appendChild(deleteButton);
    
    // Mark task as completed on click
    taskSpan.onclick = function() {
        listItem.classList.toggle('completed');
    };

    taskList.appendChild(listItem);
    taskInput.value = ''; // Clear the input field
});
