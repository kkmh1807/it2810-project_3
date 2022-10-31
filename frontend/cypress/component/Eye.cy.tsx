import React from 'react';
import Eye from '../../src/components/Eye';

describe('Eye.cy.ts', () => {
  it('toggles when clicked', () => {
    cy.intercept('POST', 'http://localhost:4000/api', (req) =>
      req.reply({
        data: {
          watched: true
        }
      })
    ).as('toggleWatched');

    cy.mount(<Eye watched={false} movieId="123" />);
    cy.get('[data-cy="unwatched-eye"]').should('exist');
    cy.get('[data-cy="watched-eye"]').should('not.exist');

    cy.get('img').click();

    cy.wait('@toggleWatched');
    cy.get('[data-cy="unwatched-eye"]').should('not.exist');
    cy.get('[data-cy="watched-eye"]').should('exist');
  });
});
