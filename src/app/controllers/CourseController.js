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
    formBody.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`
    const course = new CourseModel(formBody)
    course
      .save()
      .then(() => res.redirect('/'))
      .catch(next)
  }

  // GET /course/:id/edit
  edit(req, res, next) {
    CourseModel.findById(req.params.id)
      .lean()
      .then((coursById) => {
        res.render('course/edit', { coursById })
      })
      .catch(next)
  }

  // PUT /course/:id
  update(req, res, next) {
    req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`
    CourseModel.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/course/list'))
      .catch(next)
  }

  // DELETE /course/:id
  destroy(req, res, next) {
    CourseModel.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  // DELETE /course/:id/force
  forceDelete(req, res, next) {
    CourseModel.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  // PATCH /course/:id/restore
  restore(req, res, next) {
    CourseModel.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }
}

module.exports = new CourseController()
