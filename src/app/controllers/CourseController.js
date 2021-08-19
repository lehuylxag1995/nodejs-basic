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

  // GET /course/create
  create(req, res, next) {
    res.render('course/create')
  }

  // POST /course/store
  store(req, res, next) {
    const formBody = req.body
    formBody.image = 'https://picsum.photos/640/480'
    const course = new CourseModel(formBody)
    course
      .save()
      .then(() => res.redirect('/'))
      .catch((error) => {
        res.send(error)
      })
  }
}

module.exports = new CourseController()
