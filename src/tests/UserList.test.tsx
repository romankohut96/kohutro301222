import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { UserList } from '../components';
import { setupStore } from '../store/store';
import userEvent from '@testing-library/user-event';

describe('UserList test', () => {
	test('renders learn react link', () => {
		const { getByTestId, getByAltText } = render(
			<Provider store={setupStore()}>
				<UserList />
			</Provider>
		);

		const viewButton = getByTestId('view-button1');
		userEvent.click(viewButton);

		const viewAllButton = getByTestId('view-all-button');
		expect(getByAltText('3.jpg')).toBeTruthy();
		userEvent.click(viewAllButton);
		expect(getByAltText('4.jpg')).toBeTruthy();
	});
});
