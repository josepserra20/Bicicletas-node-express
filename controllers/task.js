const Task = require("../models/task");

async function createTask(req, res) {
    
    const task = new Task(req.body);

    try {
        const taskStore = await task.save();
        
        if (!taskStore) {
            res.status(404).send({ message: "Error al guardar la tarea" });
        } else {
            res.status(200).json(taskStore);
            console.log("Tarea guardada");
        }
    } catch (error) {
        res.status(500).send(error);

    }
}

async function getTasks(req, res) {
    try {
        const tasks = await Task.find();

        if(!tasks) {
            res.status(404).send({ message: "No hay tareas" });
        } else {
            res.status(200).json(tasks);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getTask(req, res) {
    const { description } = req.params;

    try {
        const task = await Task.findOne({ description: description });

        if(!task) {
            res.status(404).send({ message: "No hay tarea con la descripcion de " + description});
        } else {
            res.status(200).json(task);
        }
    } catch (error) {
        res.status(500).send(error);
}
}

module.exports = {
    createTask,
    getTasks,
    getTask,
}