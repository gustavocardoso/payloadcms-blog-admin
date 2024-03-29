import cors from 'cors'
import express from 'express'
import payload from 'payload'

require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

app.use(
  cors({
    origin: [
      'http://192.168.1.74:4000',
      'http://localhost:3000',
      'http://localhost:4000',
      'https://payload-website-sigma.vercel.app',
      'https://remix-website.fly.dev'
    ],
    credentials: true
  })
)

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    // mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    }
  })

  // Add your own express routes here

  app.listen(process.env.PORT)
}

start()
