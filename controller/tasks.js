const Task = require('../models/Task')

const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).json({ tasks })
        
    } catch (error) {
        res.status(500).json({ messege: error })
    }
}
const createTask = async (req, res) => {
    try {

        const task = await Task.create(req.body)
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ messege: error })

    }
}


const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `here is no id start with ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ messege: error })

    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID },res)
        console.log(res.body);

        if (!task) {
            return res.status(404).json({ messege: `the requsting id ${taskID} is not present` })
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ messege: error })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,

        })
        if (!task) {
            res.status(404).json({ messge: `there is no data for given id ${taskID}` })
        }
        res.status(200).json({ task })
    }
    catch (error) {
        res.status(500).json({ mesege: error })
    }
}

module.exports = { getAllTask, createTask, updateTask, deleteTask, getTask }