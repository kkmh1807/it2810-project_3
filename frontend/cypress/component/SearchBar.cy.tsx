import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import React from 'react';
import SearchBar from '../../src/components/SearchBar';

describe('SearchBar.cy.ts', () => {
  it('works as expected', () => {
    cy.intercept('POST', 'http://localhost:4000/api', (req) =>
      req.reply({
        data: {
          genres: ['Adventure', 'Horror', 'Comedy']
        }
      })
    ).as('getGenres');

    cy.mount(
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchBar />
        </Suspense>
      </RecoilRoot>
    );

    cy.wait('@getGenres');

    cy.get('input').should('have.attr', 'placeholder', 'Search...').type('Lord');

    cy.get('search-genre-dropwdown').should('not.exist');

    cy.get('select').should('have.value', 'ALL').select('GENRE');
    cy.get('.search-genre-dropdown').should('exist');
    cy.get('input').should('not.exist');
  });
});
