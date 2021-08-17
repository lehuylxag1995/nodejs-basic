const course = require('../models/Course')

class HomeController {
  // GET /
  index(req, res) {
    course.find({}, function (err, course) {
      if (!err) res.json(course)
      else res.status(500).json({ err: 'lỗi' })
    })
  }
}

module.exports = new HomeController()
