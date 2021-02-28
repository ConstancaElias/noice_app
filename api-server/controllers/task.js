var Tasks = require('../models/task')

// return tasks
module.exports.list = () => {
    return Tasks.find()
        .sort()
        .exec()
}

// return list of tasks done
module.exports.listDone = () => {
    return Tasks.find({done: "true"})
        .sort()
        .exec()
}

//delete a task
module.exports.delete = (id) => {
    return Tasks.deleteOne({_id: id})
}

//insert new goal
module.exports.insert = (newTask)=> {
    var t = new Tasks(newTask)
    return t.save();
}