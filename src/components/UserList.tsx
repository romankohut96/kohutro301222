import React from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../hooks/useAppSelector';
import { userSlice } from '../store/reducers/UserSlice';
import { userInfoSlice } from '../store/reducers/UserInfoSlice';
import { getImage } from '../helpers';

const UserList = () => {
	const { users, isFullList } = useAppSelector((state) => state.userReducer);
	const { fetchAllUsers } = userSlice.actions;
	const { openInfo } = userInfoSlice.actions;
	const dispatch = useDispatch();

	return (
		<div data-testid="user-list">
			{users.map((user, index) => (
				<div
					className="user-item"
					key={user.email}
				>
					<div className="user">
						<img
							src={getImage(user.photo)}
							className="user-avatar"
							alt={user.photo}
						/>
						<div className="user-info">
							<p>{user.name}</p>
							<span>{user.nickname}</span>
						</div>
					</div>
					<button
						data-testid={`view-button${index}`}
						className="button"
						onClick={() => dispatch(openInfo(user))}
					>
						View
					</button>
				</div>
			))}
			<div />
			{!isFullList ? (
				<div className="button-section">
					<button
						data-testid="view-all-button"
						className="button"
						onClick={() => dispatch(fetchAllUsers(true))}
					>
						View all
					</button>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default UserList;
