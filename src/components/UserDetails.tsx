import React from 'react';
import { useDispatch } from 'react-redux';

import { User } from '../types/User';
import { getImage } from '../helpers';

interface UserDetailsProps {
	user: User;
	close(item: null): any;
}

const UserDetails = ({ user, close }: UserDetailsProps) => {
	const dispatch = useDispatch();
	return (
		<div
			className="user-card"
			data-testid="user-card"
		>
			<button
				data-testid="close-button"
				className="button-close"
				onClick={() => dispatch(close(null))}
			>
				X
			</button>
			<div className="card-info">
				<img
					src={getImage(user.photo)}
					className="user_info-avatar"
					alt={user.photo}
				/>
				<p>{user.name}</p>
				<span>{user.position}</span>
			</div>
			<div className="user-details">
				<div className="user-data">
					<p>Phone</p>
					<p>Nickname</p>
					<p>Email</p>
				</div>
				<div>
					<p>{user.phone}</p>
					<p>{user.nickname}</p>
					<p className="email">{user.email}</p>
				</div>
			</div>
			<div className="button-section">
				<button
					className="button-message"
					onClick={() => null}
				>
					Send message
				</button>
			</div>
		</div>
	);
};

export default UserDetails;
