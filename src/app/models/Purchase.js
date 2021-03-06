const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Purchase = new mongoose.Schema({
  ad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ad',
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

Purchase.plugin(mongoosePaginate)

module.exports = mongoose.model('Purchase', Purchase)
