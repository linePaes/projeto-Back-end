const express = require("express")
const router = express.Router()

const app = express()

const door = 3333

function showHour(request, response) {
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}

function showDoor() {
    console.log("server created and running on the port", door)
}


app.use(router.get('/hour', showHour))
app.listen(door, showDoor)