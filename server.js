const express = require('express')
const cors = require('cors') //limita acceso a los servicio(administrar los accesos al servicio)
require('dotenv').config() //cargar las variables de entorno

const app = express()
app.use(cors()) //usar cors
app.use(express.json()) //usar json

//npm install dotenv cors express
//npm start

//RUTAS
const port = process.env.PORT || 3001 //PUERTO QUE VAMOS A USAR

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
