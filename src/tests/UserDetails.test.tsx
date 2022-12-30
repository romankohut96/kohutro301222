import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { UserDetails } from '../components';
import { setupStore } from '../store/store';
import usersData from '../initData.json';
import { userInfoSlice } from '../store/reducers/UserInfoSlice';
import userEvent from '@testing-library/user-event';

describe('UserDetails test', () => {
	const { close } = userInfoSlice.actions;
	test('react link', () => {
		const { getByTestId } = render(
			<Provider store={setupStore()}>
				<UserDetails
					user={usersData[0]}
					close={close}
				/>
			</Provider>
		);
		const mockCallback = jest.fn(() => close(false));

		const closeButton = getByTestId('close-button');
		userEvent.click(closeButton);
	});
});
