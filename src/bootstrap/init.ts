import express, { Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Server } from '../infra'
import { HealthCheckRoute } from '../entrypoints/apis/healthCheck'

export default () => {
    dotenv.config()
    const port: number = Number(process.env.PORT || 3000)
    const app: Application = express()
    const server = new Server(app, port)
    server
      .registerPlugin(express.json())
      .registerPlugin(cors())
      .registerRoute(HealthCheckRoute)
    return server
}


