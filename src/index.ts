import express from "express"
import connectDB from "./db/connect"
import initRoute from "./routes"
import { ResponseHandler, ErrorHandler } from "./middlewares"
import dotenv from "dotenv"

const app = express()
const port = 3001

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRoute(app)

app.use(ResponseHandler)
app.use(ErrorHandler)

connectDB()
	.then(() => {
		app.listen(port, () => {
			console.log("LISTENING ON PORT 3001")
		})
	})
	.catch(console.log)
