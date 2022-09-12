import React from 'react';
import { Button } from 'react-bootstrap';

const JadwalCard = () => {
	return (
		<div className="jadwal-card">
			<div>
				<div>
					<b>Ruang A</b>
				</div>
				<div>
					<p>8PM 20-08-2022</p>
				</div>
			</div>
			<Button variant="warning" className="btn-orange">
				Detail
			</Button>
		</div>
	);
};

export default JadwalCard;
