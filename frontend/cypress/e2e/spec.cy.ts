// TODO: change when vm is up
const API_URL = 'http://localhost:3000';

describe('End to End test', () => {
  it('can search for and save watched movies', () => {
    cy.visit(API_URL);
    cy.get('input').type('Robert');
    cy.get('button').click();
    cy.get('#drpdwn').click();
    cy.get('[data-cy="unwatched-eye"]').should('exist').click();
    cy.get('[data-cy="watched-eye"]').should('exist').click();
    cy.get('[data-cy="unwatched-eye"]').should('exist');
  });

  it('can browse different pages of movies', () => {
    cy.visit(API_URL);
    cy.get('input').type('pat');
    cy.get('button').click();
    cy.get('[data-cy="first-page"]').should('be.disabled');
    cy.get('[data-cy="last-page"]').should('not.be.disabled').click();
    cy.get('[data-cy="current-page').contains('4 of 4');
    cy.get('[data-cy="first-page"]').should('not.be.disabled');
    cy.get('[data-cy="last-page"]').should('be.disabled');
  });

  it('can search by Genre', () => {
    cy.visit(API_URL);
    cy.get('.search-mode-dropdown').select('Genres');
    cy.get('.search-genre-dropdown').select('Action');
    cy.get('button').click();
  });
  it('can sort by IMDB-rating', () => {
    cy.visit(API_URL);
    cy.get('input').type('Green');
    cy.get('button').click();
    cy.get('#rating').contains('8.6');
    cy.get('[data-cy="sorting-arrows"]').click();
    cy.get('#rating').contains('7.6');
  });
});

export {};
