require("dotenv").config()
const express = require('express')
const connectToDB = require('./src/db/db')
const noteModel = require('./src/models/note.model')
const PORT = 3000

connectToDB()
const app = express()

app.use(express.json())

app.get('/notes', async (req, res) => {
    const notes = await noteModel.find()
    res.json({
        message: "note fetch successfully",
        notes
    })
})

app.post('/notes', async (req, res) => {
    const { title, content } = req.body

    await noteModel.create({
        title, content
    })

    res.json({
        message: "note are create successfully"
    })
})

app.delete('/notes/:id', async (req, res) => {
    const noteId = req.params.id
    await noteModel.findOneAndDelete({
        _id: noteId
    })
    res.json({
        message: "note delete successfully"
    })
})

app.patch('/notes/:id', async (req, res) => {
    const noteId = req.params.id
    const { title } = req.body
    await noteModel.findOneAndUpdate({
        _id: noteId
    }, {
        title: title
    })
    res.json({
        message: 'note update successfully'
    })
    console.log(noteId)

})

app.listen(process.env.PORT, () => {
    console.log(`port running on the ${process.env.PORT}`)
})