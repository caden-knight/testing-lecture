import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../components/Header';

//test function is it and follows similar syntax as test
it('Does not show dropdown menu when mounted', () => {
	const { queryByTestId } = render(<Header />);
	const dropdown = queryByTestId('dropdown');
	expect(dropdown).not.toBeTruthy;
});

//test if specific events are working
it('Shows dropdown when hamburger is clicked', () => {
	const { container, getByTestId } = render(<Header />);
	const hamburger = getByTestId('hamburger-button');

    //will check the event fired
	fireEvent.click(hamburger);

	expect(container.textContent).toContain('Dropdown menu');
});
