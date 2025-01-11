import 'dotenv/config'
import express from 'express'
import routers from './src/routers/.index.js'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT
const url = process.env.URL || ''

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routers)

app.listen(port, () => {
  console.log(`app is running in ${url}:${port}`)
  console.log(new Date().toString())
})
