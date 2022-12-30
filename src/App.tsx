import React from 'react';
import { userInfoSlice } from './store/reducers/UserInfoSlice';

import { UserDetails, UserList } from './components';
import { useAppSelector } from './hooks/useAppSelector';

import './App.css';

const App = () => {
	const { user, isPreview } = useAppSelector((state) => state.userInfoReducer);
	const { close } = userInfoSlice.actions;

	return (
		<div className="App">
			<div className="container">
				{isPreview && user ? (
					<UserDetails
						user={user}
						close={close}
					/>
				) : (
					<UserList />
				)}
			</div>
		</div>
	);
};

export default App;
