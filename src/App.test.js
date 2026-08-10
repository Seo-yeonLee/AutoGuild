// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutoGuild title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AutoGuild/i);
    expect(titleElement).toBeInTheDocument();
});
