const Course = require('../models/Course')

class HomeController {
  // GET /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = courses.map((khoahoc) => khoahoc.toObject())
        res.render('home', { courses })
      })
      .catch(next)
  }
}

module.exports = new HomeController()
