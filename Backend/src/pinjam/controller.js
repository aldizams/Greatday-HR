const pool = require('../../db');
const queries = require('./queries');

const getRuangan = (req, res) => {
	pool.query(queries.getRuangan, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};

const getJadwal = (req, res) => {
	pool.query(queries.getJadwal, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};

const getJadwalID = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query(queries.getJadwalID, [id], (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};

const addJadwal = (req, res) => {
	const {
		id_ruang,
		nama_peminjam,
		tanggal_pinjam,
		waktu_pinjam,
		durasi_pinjam,
		ket_peminjaman,
	} = req.body;

	//check availability
	pool.query(
		queries.checkAvailability,
		[id_ruang, tanggal_pinjam, waktu_pinjam],
		(error, results) => {
			if (results.rows.length) {
				res.send('Ruangan Tidak Tersedia!');
			}

			//add jadwal
			pool.query(
				queries.addJadwal,
				[
					id_ruang,
					nama_peminjam,
					tanggal_pinjam,
					waktu_pinjam,
					durasi_pinjam,
					ket_peminjaman,
				],
				(error, results) => {
					if (error) throw error;
					res.status(201).send('Jadwal Berhasil Ditambahkan!');
				}
			);
		}
	);
};

const deleteJadwal = (req, res) => {
	const id = parseInt(req.params.id);
	//check jadwal
	pool.query(queries.getJadwalID, [id], (error, results) => {
		const noJadwal = !results.rows.length;
		if (noJadwal) {
			res.send('Jadwal Kosong!');
		}
		//delete jadwal
		pool.query(queries.removeJadwal, [id], (error, results) => {
			if (error) throw error;
			res.status(200).send('Jadwal Berhasil Dihapus!');
		});
	});
};

const updateJadwal = (req, res) => {
	const id = parseInt(req.params.id);
	const {
		id_ruang,
		nama_peminjam,
		tanggal_pinjam,
		waktu_pinjam,
		durasi_pinjam,
		ket_peminjaman,
	} = req.body;

	//check jadwal
	pool.query(queries.getJadwalID, [id], (error, results) => {
		const noJadwal = !results.rows.length;
		if (noJadwal) {
			res.send('Jadwal Kosong!');
		}
		pool.query(
			queries.updateJadwal,
			[
				id,
				id_ruang,
				nama_peminjam,
				tanggal_pinjam,
				waktu_pinjam,
				durasi_pinjam,
				ket_peminjaman,
			],
			(error, results) => {
				if (error) throw error;
				res.status(200).send('Jadwal berhasil diupdate');
			}
		);
	});
};

module.exports = {
	getRuangan,
	getJadwal,
	getJadwalID,
	addJadwal,
	deleteJadwal,
	updateJadwal,
};
