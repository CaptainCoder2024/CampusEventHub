const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: { 
    type: String, 
    default: 'General'
  },
  dateStart: Date,
  dateEnd: Date,
  location: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  attendeesCount: { type: Number, default: 0 }
});

module.exports = mongoose.models.Event || mongoose.model('Event', eventSchema);