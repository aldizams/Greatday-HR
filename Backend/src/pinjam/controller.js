const pool = require('../../db');
const query = require('./queries');
const getRuangan = (req, res) => {
	pool.query(query.getRuangan, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};

const getJadwal = (req, res) => {
	pool.query(query.getJadwal, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};

module.exports = {
	getRuangan,
	getJadwal,
};
