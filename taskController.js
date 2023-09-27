const fs = require('fs');

function getAllTasks(cb) {
    try {
        fs.readFile('tasks.json', 'utf8', (err, data) => {
            if (err) cb(err)
            cb(null, JSON.parse(data));
        });
    } catch (readFileErr) {
        throw readFileErr;
    }
    
};

function listTasks() {
    getAllTasks((err, tasks) => {
        if (err) throw err;

        if (tasks.length === 0) {
            console.log("Error, no tasks found");
        } else {
            console.log('Task List:');
            tasks.forEach((task, index) => {
                console.log(`${index + 1}. Title: ${task.title}`);
                console.log(`Description: ${task.description}`);
                console.log(`Status: ${task.status}\n`);
            });
        }
    });
}

function addTask(title, description) {
    // Get current tasks from list
    getAllTasks((err, tasks) => {
        if (err) throw err;

        // New task in json format
        const newTask = {
            title: `${title}`,
            description: `${description}`,
            status: "not-complete"
        };
 
        // Push newTask to tasks
        tasks.push(newTask);
        fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2), (err) => {
            if (err) throw err;
            console.log("New task added.")
        });
    });
}

function markAsComplete(title) {
    getAllTasks((err, tasks) => {
        if (err) throw err;
        const task = tasks.find((t) => t.title === title);

        if (!task) console.error("Task not found.");

        task.status = 'complete';

        fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2), (err) => {
            if (err) throw err;
            console.log("Task marked as complete.");
        });
    })
}

module.exports = {
    listTasks,
    addTask,
    markAsComplete
};