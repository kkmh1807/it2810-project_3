import React from 'react';
import MovieCard from '../../src/components/MovieCard';
import { Movie } from '../../src/types/movie';

describe('MovieCard.cy.ts', () => {
  it('opens and closes when clicked', () => {
    const mockedMovie: Movie = {
      _id: 'mockMovie',
      Series_Title: 'White Chicks',
      Poster_Link: '',
      Released_Year: 2004,
      Certificate: 'string',
      Runtime: '1h 49m',
      Genre: 'Comedy',
      IMDB_Rating: 5.7,
      Overview: 'Two disgraced FBI agents go way undercover in an effort to protect hotel heiresses the Wilson sisters from a kidnapping plot.',
      Meta_score: 200,
      Director: 'Keenen Ivory Wayans',
      Star1: 'Marlon Wayans',
      Star2: 'Shawn Wayans',
      Star3: 'Busy Phillipps',
      Star4: 'Maitland Ward',
      No_of_Votes: 2000,
      Gross: 69148997,
      Watched: false
    };
    cy.mount(<MovieCard movie={mockedMovie} />);
    cy.get('.movie-card').click();
    cy.get('.drpdwn-card').should('exist');
    cy.get('.movie-card').click();
    cy.get('.drpdwn-card').should('not.exist');
  });
});
