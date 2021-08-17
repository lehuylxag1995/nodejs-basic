const mongoose = require('mongoose')

async function connectDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/education_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    console.log(`Connect to Database success !!!`)
  } catch (error) {
    console.log(`Connect to database failure !!!`)
  }
}

module.exports = { connectDatabase }
