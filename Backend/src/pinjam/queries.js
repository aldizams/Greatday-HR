const getJadwal =
	'SELECT pinjam.id, nama_ruang, nama_peminjam, tanggal_pinjam, waktu_pinjam, durasi_pinjam, ket_peminjaman  FROM pinjam LEFT JOIN ruangan ON ruangan.id = pinjam.id_ruang';
const getRuangan = 'SELECT * FROM ruangan';
const getJadwalID =
	'SELECT pinjam.id, nama_ruang, nama_peminjam, tanggal_pinjam, waktu_pinjam, durasi_pinjam, ket_peminjaman  FROM pinjam JOIN ruangan ON pinjam.id_ruang = ruangan.id WHERE pinjam.id = $1';
const checkAvailability =
	'SELECT s FROM pinjam s WHERE s.id_ruang = $1 AND s.tanggal_pinjam = $2 AND s.waktu_pinjam = $3 ';
const addJadwal =
	'INSERT INTO pinjam (id_ruang, nama_peminjam, tanggal_pinjam, waktu_pinjam, durasi_pinjam, ket_peminjaman) VALUES ($1,$2,$3,$4,$5,$6)';
const removeJadwal = 'DELETE FROM pinjam WHERE id  = $1';
const updateJadwal =
	'UPDATE pinjam SET id_ruang = $2 OR nama_peminjam = $3 OR tanggal_pinjam = $4 OR waktu_pinjam = $5 OR durasi_pinjam = $6 OR ket_peminjaman = $7 WHERE id = $1 ';

module.exports = {
	getJadwal,
	getRuangan,
	getJadwalID,
	checkAvailability,
	addJadwal,
	removeJadwal,
	updateJadwal,
};
