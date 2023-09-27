# SimpleTaskManager
Objective: Develop a simple Node.js application that manages a list of tasks. The application should be able to read tasks from a file, add new tasks, mark tasks as completed, and list all tasks.

    Setup:
        Initialize a new Node.js project using npm init.
        Create a tasks.json file with a few sample tasks. Each task should have a title, description, and a status (completed or not).
    Reading Tasks:
        Create a function getAllTasks that reads the tasks.json file and returns an array of tasks. Use the asynchronous readFile method.
    Listing All Tasks:
        Create a function listTasks that fetches all tasks using getAllTasks and displays them in a formatted manner.
    Adding a New Task:
        Create a function addTask that takes a title and description as parameters and adds a new task to the tasks.json file with a default status of "not completed". Use the asynchronous writeFile method.
    Marking a Task as Completed:
        Create a function completeTask that takes a task title as a parameter and updates its status to "completed" in the tasks.json file.
    User Interaction:
        Use the built-in readline module in Node.js to create a simple command-line interface where the user can:
            List all tasks.
            Add a new task.
            Mark a task as completed.
    Error Handling:
        Ensure that your functions handle potential errors, especially when reading from or writing to the file.
