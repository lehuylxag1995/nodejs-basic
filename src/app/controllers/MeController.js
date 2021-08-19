const Course = require('../models/Course')

class MeController {
  // GET /me/course/list
  list(req, res, next) {
    Course.find({})
      .lean()
      .then((courses) => {
        res.render('me/list-course', { courses })
      })
      .catch(next)
  }
}

module.exports = new MeController()
