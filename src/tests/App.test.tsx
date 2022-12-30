import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import App from '../App';
import { setupStore } from '../store/store';
describe('App test', () => {
	test('renders learn react link', () => {
		render(
			<Provider store={setupStore()}>
				<App />
			</Provider>
		);
	});
});
