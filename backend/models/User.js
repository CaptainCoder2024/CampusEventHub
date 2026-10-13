const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['student', 'manager', 'admin'], default: 'student' },
  isLocked: { type: Boolean, default: false },
  bio: { type: String, default: '' },
  avatar: { type: String, default: '' },
  activityPoints: { type: Number, default: 0 },
  eventsAttended: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);