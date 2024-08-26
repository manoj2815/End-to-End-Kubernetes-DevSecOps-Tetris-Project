import { render, screen } from '@testing-library/react';
import Game from './Game'; // Ensure this matches the export from Game.js

test('renders learn react link', () => {
  // Mock the necessary props
  const tetrisMock = {
    state: {
      // Assuming state has properties you might check
    }
  };

  // Render the Game component with the mock props
  render(<Game tetris={tetrisMock} />);

  // Ensure the text matches something actually rendered by the component
  const linkElement = screen.getByText(/learn react/i); // Update this line if "learn react" isn't in your component's output

  expect(linkElement).toBeInTheDocument();
});

