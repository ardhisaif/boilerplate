import 'dotenv/config'
import express from 'express'
import routers from './src/routers/.index.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const port = process.env.PORT
const url = process.env.URL || ''

app.use(cors({
  origin: 'http://localhost:3000', // URL frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Metode yang diizinkan
  allowedHeaders: ['Content-Type', 'Authorization', 'auth_security'], // Header yang diizinkan
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routers)

app.listen(port, () => {
  console.log(`app is running in ${url}:${port}`)
  console.log(new Date().toString())
})
