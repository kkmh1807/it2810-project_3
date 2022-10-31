import { Suspense } from 'react';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import MovieList from '../../src/components/MovieList';
import { queryState } from '../../src/recoil/atoms';

const response = {
  data: {
    getMoviesByAll: {
      data: [
        {
          _id: '123',
          Poster_link: '',
          Series_Title: 'Pulp Fiction',
          Genre: 'Action',
          IMDB_rating: 9.8,
          Star1: 'Samuel L. Jackson'
        }
      ],
      pageInfo: {
        totalPages: 1
      }
    }
  }
};

// Simple helper component to set query value
const HelperComponent = () => {
  const setQueryState = useSetRecoilState(queryState);

  return <button onClick={() => setQueryState((cur) => ({ ...cur, value: 'Fiction' }))}></button>;
};

describe('MovieList.cy.tsx', () => {
  it('renders only when query has a value', () => {
    cy.intercept('POST', 'http://localhost:4000/api', response).as('movieSearch');

    cy.mount(
      <RecoilRoot>
        <Suspense>
          <HelperComponent />
          <MovieList setTotalPages={() => null} />
        </Suspense>
      </RecoilRoot>
    );

    cy.get('.movie-card-container').should('not.exist');

    cy.get('button').click();
    cy.wait('@movieSearch');

    cy.get('.movie-card-container').should('exist');
  });
});
