const express = require('express')
const PORT = 3000
const app = express()

app.use(express.json())
let notes = []

app.post('/notes', (req, res) => {
    console.log(req.body)
    notes.push(req.body)
    res.json({
        message: "message set successfully",
        notes: notes
    })
})

app.get('/notes', (req, res) => {
    res.json(notes)
})

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index
    delete notes[index]
    res.json({
        message:"note delete successfully"
    })
})

app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index
    const {title} = req.body
    console.log(req.body)
    notes[index].title = title
    res.json({
        message:"note are update successfully"
    }) 
})

app.listen(PORT, () => {
    console.log(`server running on the ${PORT}`)
})