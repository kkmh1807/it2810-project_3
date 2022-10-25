import { selector } from 'recoil';
import { getRequest } from '../../api/fetchData';
import { MovieResponse } from '../../types';
import { currentPage as currentPageState, queryState } from '../atoms';

const queryMap = {
  ALL: getMoviesByTitle,
  TITLE: getMoviesByTitle,
  ACTOR: getMoviesByActor,
  GENRE: getMoviesByGenre
};

export const searchMovies = selector({
  key: 'search-movies',
  get: async ({ get }) => {
    const query = get(queryState);
    const currentPage = get(currentPageState);

    if (!query.value) return;

    return queryMap[query.mode](query.value, currentPage);
  }
});

async function getMoviesByTitle(title: string, page: number) {
  const searchQuery = `{
    getMoviesByTitle (title: "${title}", currentPage: ${page}) {
      data {
        _id,
        Series_Title,
        Poster_Link,
        Genre,
        Star1,
        Star2,
        Star3,
        Star4,
        IMDB_Rating, 
        Overview,
        Watched,
      }
      pageInfo {
        currentPage
        totalPages
        pageSize
      }
    }
  }`;

  const response = await getRequest<{ getMoviesByTitle: MovieResponse }>(`http://localhost:4000/api?query=${searchQuery}`);
  return response.getMoviesByTitle;
}

async function getMoviesByActor(actor: string, page: number) {
  const searchQuery = `{
    getMoviesByActors (actor: "${actor}", currentPage: ${page}) {
      data {
        _id,
        Series_Title,
        Poster_Link,
        Genre,
        Star1,
        Star2,
        Star3,
        Star4,
        IMDB_Rating, 
        Overview,
        Watched,        
      }
      pageInfo {
        currentPage
        totalPages
        pageSize
      }
    }
  }`;

  const response = await getRequest<{ getMoviesByActors: MovieResponse }>(`http://localhost:4000/api?query=${searchQuery}`);
  return response.getMoviesByActors;
}

async function getMoviesByGenre(genre: string, page: number) {
  const searchQuery = `{
    getMoviesByGenre (genre: "${genre}", currentPage: ${page}) {
      data {
        _id,
        Series_Title,
        Poster_Link,
        Genre,
        Star1,
        Star2,
        Star3,
        Star4,
        IMDB_Rating, 
        Overview,
        Watched,
      }
      pageInfo {
        currentPage
        totalPages
        pageSize
      }
    }
  }`;

  const response = await getRequest<{ getMoviesByGenre: MovieResponse }>(`http://localhost:4000/api?query=${searchQuery}`);
  return response.getMoviesByGenre;
}

// TODO: get all??
// async function getMoviesByTitle(title: string, page: number) {
//   const searchQuery = `{
//     getMoviesByTitle (title: "${title}" currentPage: ${page}) {
//       data {
//         _id
//         Series_Title
//         Poster_Link
//       }
//       pageInfo {
//         currentPage
//         totalPages
//         pageSize
//       }
//     }
//   }`;

//   const response = await getRequest<{ getMoviesByTitle: MovieResponse }>(`http://localhost:4000/api?query=${searchQuery}`);
//   return response.getMoviesByTitle;
// }
