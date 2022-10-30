import SearchBar from '../../components/SearchBar';
import { render, waitFor, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

describe('searchbar', () => {
  beforeAll(() => {
    const mockState = { genres: ['Adventure', 'Horror', 'Comedy'] };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockState)
      })
    );
  });

  it('renders correctly', async () => {
    const view = render(
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchBar />
        </Suspense>
      </RecoilRoot>
    );

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
    expect(view.asFragment()).toMatchInlineSnapshot();
  });
});
