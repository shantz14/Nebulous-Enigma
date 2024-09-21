const {signup, removeUser} = require('./utils'); 

const express = require('express')

const path = require('path')
const app = express()
app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(express.static(path.join(__dirname, 'static')))

// For form data
var multer = require('multer');
var upload = multer();
app.use(upload.array());

const port = 8080

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'first_choice', 'index.html')) 
})

app.get("/first_choice", (req, res) => {

})

app.post("/api/signup", (req, res) => {
    console.log(req.body)
    signup(req.body.username, req.body.password)
})

app.put("/api/save", (req, res) => {

})

app.delete("/api/delete", (req, res) => {

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

