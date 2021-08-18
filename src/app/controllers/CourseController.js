const CourseModel = require('../models/Course')

class CourseController {
  // GET /course/:slug
  show(req, res, next) {
    CourseModel.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('course/show', course.toObject())
      })
      .catch(next)
  }
}

module.exports = new CourseController()
