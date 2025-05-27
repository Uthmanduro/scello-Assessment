const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const auth = require('../middleware/authMiddleware');

router.use(auth);
router.get('/report-time', reportController.reportTime);
router.get('/report', reportController.reportSummary);

module.exports = router;
