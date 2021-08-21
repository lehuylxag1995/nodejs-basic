const Course = require('../models/Course')

class MeController {
  // GET /me/course/list
  // listCourse(req, res, next) {
  //   Promise.all([Course.find({}).lean(), Course.countDocumentsDeleted().lean()])
  //     .then(([courses, countDocumentDeleted]) => {
  //       res.render('me/list-course', {
  //         courses,
  //         countDocumentDeleted
  //       })
  //     })
  //     .catch(next)
  // }

  // GET /me/course/list
  async listCourse(req, res, next) {
    try {
      const courses = await Course.find({}).lean()
      const countDocumentDeleted = await Course.countDocumentsDeleted().lean()
      return res.render('me/list-course', { courses, countDocumentDeleted })
    } catch (error) {
      this.listCourse.catch(next)
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
