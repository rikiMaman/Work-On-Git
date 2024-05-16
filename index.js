import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import JobsRouter from './JobsRouter.js';

const app= express()
app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res)=>{
    console.log('aaa');
    res.send('first project in node')
})
app.use('/jobs', JobsRouter) 
app.listen(5001, () => {
    console.log('app is running on http://localhost:5001')
})