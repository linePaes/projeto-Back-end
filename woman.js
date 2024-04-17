const express = require("express")
const router = express.Router()

const app = express()
const door = 3333

function showWoman(request, response) {
    response.json({
        name: "Aline Ferreira",
        image:"https://1drv.ms/i/s!AjB_ydErTxUyhIYCfpayKEochJYKGg?e=MdjAgQ",
        minibio: "Software Engineer"
    })
}

function showDoor() {
    console.log("server created and running on the port", door)
}

app.use(router.get('/woman', showWoman))
app.listen(door, showDoor)