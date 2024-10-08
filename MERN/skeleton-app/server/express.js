import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(compress())
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send(Template())
})

export default app
