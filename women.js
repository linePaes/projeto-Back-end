const express = require("express")
const router = express.Router()

const app = express()
const door = 3333

const women = [
    {
        name: "Aline Ferreira",
        image:"https://1drv.ms/i/s!AjB_ydErTxUyhIYCfpayKEochJYKGg?e=MdjAgQ",
        minibio: "Software Engineer"
    },
    {
        name: "Isabelle Ferreira",
        image:"https://1drv.ms/i/s!AjB_ydErTxUygnVkNsINvi966PFc?e=8G6Ib6",
        minibio: "Content Creator"
    },
    {
        name: "Danielle Viana",
        image:"https://1drv.ms/i/s!AjB_ydErTxUygnFp3NlvRqRfrWUZ?e=RHsM2e",
        minibio: "Student"
    }
]

function showWomen(request, response) {
   response.json(women)
}

function showDoor() {
    console.log("server created and running on the port", door)
}

app.use(router.get('/women', showWomen))
app.listen(door, showDoor)