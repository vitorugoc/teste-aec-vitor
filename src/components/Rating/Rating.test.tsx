import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Rating from './index';

describe('Rating component', () => {
  it('renders Rating component with default color', () => {

    render(<Rating value={3} color={'#FFA41C'} />);

    expect(screen.getByTestId('rating')).toBeInTheDocument();

    expect(screen.getAllByTestId('star')).toHaveLength(5);

    expect(screen.queryByText('Some text')).not.toBeInTheDocument();
  });

  it('renders Rating component with custom color and text', () => {

    render(<Rating value={4.5} color="#4285F4" text="Testing" />);

    expect(screen.getByTestId('rating')).toBeInTheDocument();

    expect(screen.getAllByTestId('star')).toHaveLength(5);

    expect(screen.getByText('Testing')).toBeInTheDocument();
  });
});
