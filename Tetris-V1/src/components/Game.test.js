import { render, screen } from '@testing-library/react';
import Game from './Game';

const tetrisMock = {
    state: {
        isStarted: () => true,  // Game has started
        isRunning: () => false, // Game is paused
        visibleMatrix: () => [[null, null], [null, null]],
        nextPiece: () => ({ shape: [[1]], color: 'red' }),
        isGameOver: () => false,
        score: () => 100,
        level: () => 2
    },
    onStateChange: jest.fn(),
    offStateChange: jest.fn(),
    start: jest.fn(),
    pause: jest.fn(),
    resume: jest.fn()
};

test('renders game controls correctly', () => {
    render(<Game tetris={tetrisMock} />);
    const resumeButton = screen.getByText('Resume');
    expect(resumeButton).toBeInTheDocument();
    const scoreDisplay = screen.getByText('100'); // Adjusted to look for just '100'
    expect(scoreDisplay).toBeInTheDocument();
});

