const express = require("express")
const router = express.Router()

const app = express()
const door = 3333

function showHello(request, response){
    response.send("Hello, world!")
}

function showDoor() {
    console.log("server created and running on the port", door)
}

app.use(router.get('/hello', showHello))
app.listen(door, showDoor)