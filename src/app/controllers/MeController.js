const Course = require('../models/Course')

class MeController {
  // GET /me/course/list
  listCourse(req, res, next) {
    Course.find({})
      .lean()
      .then((courses) => {
        res.render('me/list-course', { courses })
      })
      .catch(next)
  }

  // GET /me/course/trash
  trashCourse(req, res, next) {
    Course.findDeleted({})
      .lean()
      .then((courses) => res.render('me/trash-course', { courses }))
      .catch(next)
  }
}

module.exports = new MeController()
