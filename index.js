import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import JobsRouter from './JobsRouter.js';
import index from './index.html';

const app= express()

const arr1= [1,2,3,4,5];
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