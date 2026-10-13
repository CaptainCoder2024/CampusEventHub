const express = require('express');
const User = require('../models/User');
const { auth, permit } = require('../middleware/auth');

const router = express.Router();

router.use(auth, permit('admin'));

router.get('/users', async (req, res) => {
  try {
    const q = {};
    if (req.query.role) {
      q.role = req.query.role;
    } else {
      q.role = { $in: ['student', 'manager'] };
    }

    const users = await User.find(q).select('-passwordHash').sort({ createdAt: -1 });

    const formatted = users.map(user => ({
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      accountType: user.role,
      activityPoints: user.activityPoints || 0,
      eventsAttended: user.eventsAttended || 0,
      joinedDate: new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      bio: user.bio,
      isLocked: user.isLocked
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.patch('/users/:id/lock', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { isLocked: true }, { new: true }).select('-passwordHash');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.patch('/users/:id/unlock', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { isLocked: false }, { new: true }).select('-passwordHash');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/export/users', async (req, res) => {
  try {
    const users = await User.find({ role: { $in: ['student', 'manager'] } }).select('-passwordHash').sort({ createdAt: -1 });
    const exportData = users.map(u => ({
      name: u.name,
      email: u.email,
      accountType: u.role,
      activityPoints: u.activityPoints || 0,
      eventsAttended: u.eventsAttended || 0,
      joinedDate: new Date(u.createdAt).toLocaleDateString(),
      isLocked: u.isLocked
    }));
    res.json(exportData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;