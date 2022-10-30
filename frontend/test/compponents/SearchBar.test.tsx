import SearchBar from '../../src/components/SearchBar';
import { render } from '@testing-library/react';

describe('searchbar', () => {
  it('renders correctly', () => {
    const view = render(<SearchBar />);
    expect(view.asFragment()).toMatchInlineSnapshot();
  });
});
