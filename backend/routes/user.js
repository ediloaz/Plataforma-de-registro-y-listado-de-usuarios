const express = require('express');
const router = express.Router();

// ...existing code...

router.post('/register', (req, res) => {
  const userData = req.body;
  res.json(userData);
});

// ...existing code...

module.exports = router;
