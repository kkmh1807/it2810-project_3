import React from 'react';
import { RecoilRoot } from 'recoil';
import Pagination from '../../src/components/Pagination';

describe('Pagination.cy.tsx', () => {
  it('is disabled when it should be', () => {
    const mockPages = 10;
    cy.mount(
      <RecoilRoot>
        <Pagination totalPages={mockPages} />
      </RecoilRoot>
    );
    cy.get('[data-cy="first-page"]').should('be.disabled');
    cy.get('[data-cy="prev-page"]').should('be.disabled');
    cy.get('[data-cy="last-page"]').should('not.be.disabled');
    cy.get('[data-cy="next-page"]').should('not.be.disabled');
    cy.get('[data-cy="last-page"]').click();
    cy.get('[data-cy="first-page"]').should('not.be.disabled');
    cy.get('[data-cy="prev-page"]').should('not.be.disabled');
    cy.get('[data-cy="last-page"]').should('be.disabled');
    cy.get('[data-cy="next-page"]').should('be.disabled');
  });
  it('shows correct page count', () => {
    const mockPages = 10;
    cy.mount(
      <RecoilRoot>
        <Pagination totalPages={mockPages} />
      </RecoilRoot>
    );
    cy.get('[data-cy="current-page"]').contains('1 of 10');
    cy.get('[data-cy="next-page"]').click();
    cy.get('[data-cy="current-page"]').contains('2 of 10');
  });
});
