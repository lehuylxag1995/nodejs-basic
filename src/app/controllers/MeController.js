const Course = require('../models/Course')

class MeController {
  // GET /me/course/list
  async listCourse(req, res, next) {
    try {
      let courses = await Course.find({}).lean()

      if (Object.prototype.hasOwnProperty.call(req.query, '_sort'))
        courses = await Course.find({})
          .sort({ [req.query.column]: `${req.query.type}` })
          .lean()

      const countDocumentDeleted = await Course.countDocumentsDeleted().lean()
      return res.render('me/list-course', { courses, countDocumentDeleted })
    } catch (error) {
      next(error)
    }
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
