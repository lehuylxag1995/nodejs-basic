class HomeController {
  // GET /
  index(req, res) {
    res.json({
      name: 'test',
    })
  }
}

module.exports = new HomeController()
