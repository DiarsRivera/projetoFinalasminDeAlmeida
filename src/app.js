require('dotenv').config();
const express = require('express');
const cors = require('cors');
const database = require('./config/dados');
const estabelecimentosRouters = require("./routes/estabelecimentosRoutes")

const app = express()

app.use(express.json())
app.use(cors())

database.connect()


app.use("/cadastro", estabelecimentosRouters)

module.exports = app;