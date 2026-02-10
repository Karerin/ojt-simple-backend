import express from "express"
import http from "http"
import cors from "cors"
import cookieParser from "cookie-parser"
import { createHandler } from "graphql-http/lib/use/express"
import schema from "./graphql/merge.js"

import connectDB from "./config/db.js"

const app = express()
const httpServer = http.createServer(app)

const start = async () => {
  await connectDB()
  app.use(
    "/",
    cors({
      origin: "http://192.168.6.67",
      credentials: true,
    }),
    express.json(),
    cookieParser(),
    createHandler({
      schema,
      context: (req, res) => ({
        req,
        res,
      }),
    }),
  )

  httpServer.listen(5000, () => {
    console.log(`SERVER READY @ 192.168.6.67`)
  })
}

start()
