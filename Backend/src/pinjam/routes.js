const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/ruangan', controller.getRuangan);
router.get('/jadwal', controller.getJadwal);

module.exports = router;
