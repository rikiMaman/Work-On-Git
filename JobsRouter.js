import express from 'express'
import JobController from './JobsController.js'

const JobsRouter= express.Router()

JobsRouter.get('/', JobController.getAll)
JobsRouter.post('/', JobController.add)
JobsRouter.put('/:id', JobController.update)
JobsRouter.delete('/:id', JobController.delete)
export default JobsRouter