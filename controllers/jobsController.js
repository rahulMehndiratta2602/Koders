import Job from '../models/Job.js'
// import checkPermissions from '../utils/checkPermissions.js'
import mongoose from 'mongoose'
// import moment from 'moment'
const createJob = async (req, res) => {
     const { position, company } = req.body

  if (!position || !company) {
    res.status(400).json({"msg":"Please provide all values"})
  }
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(201).json({ job })
}
const deleteJob = (req, res) => {
    res.send('Delete Job')
}
const getAllJobs = (req, res) => {
    res.send('Get All Job')
}
const updateJob = (req, res) => {
    res.send('Update Job')
}
const showStats = (req, res) => {
    res.send('Show stats')
}
export { createJob, deleteJob, getAllJobs, updateJob, showStats }
