const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/ruangan', controller.getRuangan);
router.get('/jadwal', controller.getJadwal);
router.get('/jadwal/:id', controller.getJadwalID);
router.post('/jadwal', controller.addJadwal);
router.delete('/jadwal/:id', controller.deleteJadwal);
router.put('/jadwal/:id', controller.updateJadwal);

module.exports = router;
