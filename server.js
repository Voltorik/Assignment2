const { listTasks, addTask, markAsComplete } = require('./taskController');
const readline = require('readline');
const { stdin: input, stdout: output} = require('node:process');

const rl = readline.createInterface({ input, output});

rl.setPrompt(`Choose a function
1. List all tasks.
2. Add a new task.
3. Mark task as complete.
4. Exit.\n`);

rl.prompt();

rl.on('line', (input) => {
    switch (input.trim()) {
        case '1': 
            listTasks();
            break;
        case '2':
            rl.question('Enter a task title: ', (title) => {
                rl.question('Enter task description: ', (description) => {
                    addTask(title, description);
                    rl.prompt();
                });
            });
        case '3':
            rl.question('Enter a task title to mark as complete: ', (title) => {
                markAsComplete(title);
                rl.prompt();
            });
            break;
        case '4':
            console.log('Exiting...');
            rl.close();
            break;
        default:
            console.log('Error, invalid input.');
            break;
    }
});

