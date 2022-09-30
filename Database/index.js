//inicial config
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require("cors")

//form da ler json
app.use(
    express.urlencoded({
        extended: true,
    
    }),
)
app.use(cors())
app.use(express.json())
//rota
//rotas api
const localRoutes =require('./routes/localRoutes')
app.use('/local',localRoutes)

app.get('/', (req, res) => {

    // mostrar req
    res.json({message: "Oi Express"})
})

//entregar porta
const DB_USER ='Igor-Miranda'
const DB_PASSWORD =encodeURIComponent('Banco@Senha123')
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.b0uxlur.mongodb.net/?retryWrites=true&w=majority`,
    )
    .then(() => {
        console.log("Conectado")
        app.listen(3000)
    })
    .catch((err) => console.log(err))