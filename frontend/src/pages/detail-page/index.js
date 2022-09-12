import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { DetailCard } from '../../components';
import { Link } from 'react-router-dom';
const DetailPage = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

	return (
		<>
			<span className="bar" />
			<div className="bg-content-detail">
				<Container flex="sm">
					<Button
						variant="warning"
						className="btn-orange detail-back-btn"
						as={Link}
						to="/ruangan"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							fill="currentColor"
							className="bi bi-backspace-fill back-icon"
							viewBox="0 0 16 16"
						>
							<path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
						</svg>
					</Button>{' '}
					<div>
						<b className="title-page">Ruang A</b>
					</div>
					<div className="detail-content">
						<DetailCard />
					</div>
				</Container>
			</div>
			<Container flex="sm" className="detail-pinjam">
				<Button variant="warning" className="btn-orange detail-pinjam-btn">
					PINJAM RUANGAN
				</Button>
			</Container>
		</>
	);
};

export default DetailPage;
