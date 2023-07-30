import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Test render', () => {
    test('with only first param', () => {
        render(<Button />);
        expect(screen.getByTestId('button-testid')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR} />);
        expect(screen.getByTestId('button-testid')).toHaveClass('clear');
        screen.debug();
    });
});
