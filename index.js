const {signup, login, removeUser} = require('./serverUtils')

// Module for handling http requests
const express = require('express')
const app = express()

// Module for normalizing file paths across Windows/Mac/Linux
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Telling express where to serve static files from
app.use(express.static(path.join(__dirname, 'static')))

const port = 8080

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'first_choice', 'index.html')) 
})

app.post("/api/signup", (req, res) => {
    console.log("Attempting to add user: " + req.body.username + ".")
    signup(req.body.username, req.body.password)

    res.redirect("/login")
})

app.post("/api/login", (req, res) => {
    console.log("Attempting to login user: " + req.body.username + ".")
    let success = login(req.body.username, req.body.password)

    if (success) {
        res.send("<h2>Hello " + req.body.username + ".<h2>")
    } else {
        res.send("<h2>Invalid Login Credentials</h2>")
    }
})

app.put("/api/save", (req, res) => {

})

app.delete("/api/delete", (req, res) => {

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

