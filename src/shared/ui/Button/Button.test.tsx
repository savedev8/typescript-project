import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Test render', () => {
    test('with only first param', () => {
        render(<Button />); // TEST text
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR} />); // TEST text
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
