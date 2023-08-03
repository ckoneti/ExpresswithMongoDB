import express, {Request, Response, Application} from 'express'
import connectDB from './config/dbConnection'
const app:Application = express()
import 'dotenv/config'
import router from './routes/contactRoutes'
connectDB();
app.use(express.json())
app.use('/api/account', router)

app.listen(process.env.PORT, ()=>{
console.log(`Server is listening on ${process.env.PORT}`)
})