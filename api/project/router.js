const express = require('express')
const projectsModel = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    projectsModel
        .getAll()
        .then((projects) => {
            res.status(200).json(projects)
        })
        .catch(next)
})

module.exports = router
