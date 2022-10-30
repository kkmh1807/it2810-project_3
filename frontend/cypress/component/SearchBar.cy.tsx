import { mount } from 'cypress/react18';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import React from 'react';
import SearchBar from '../../src/components/SearchBar';

describe('SearchBar.cy.ts', () => {
  it('mounts', () => {
    cy.intercept('POST', 'http://localhost:4000/api', (req) =>
      req.reply({
        data: {
          genres: ['Adventure', 'Horror', 'Comedy']
        }
      })
    );

    cy.mount(
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchBar />
        </Suspense>
      </RecoilRoot>
    );

    cy.get('input').should('have.attr', 'placeholder', 'Search...');
    cy.get('select').should('have.value', 'ALL');
    // search button / function
    // input field
    // select genres dropdown
  });
});
