const Course = require('../models/Course')

class HomeController {
  // GET /
  index(req, res, next) {
    // course.find({}, function (err, course) {
    //   if (!err) res.json(course)
    //   else res.status(500).json({ err: 'lỗi' })
    // })
    Course.find({})
      .then((courses) => {
        courses = courses.map((khoahoc) => khoahoc.toObject())
        res.render('home', { courses })
      })
      .catch(next)
  }
}

module.exports = new HomeController()
