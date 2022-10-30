import { FC, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { searchMoviesSelector } from '../recoil/selectors';
import MovieCard from './MovieCard';

interface MovieListProps {
  setTotalPages: (val: number) => void;
}

const MovieList: FC<MovieListProps> = ({ setTotalPages }) => {
  const movies = useRecoilValue(searchMoviesSelector);

  useEffect(() => {
    setTotalPages(movies?.pageInfo.totalPages || 0);
  }, [movies?.data]);

  return (
    <>
      {movies?.data.map((movie) => (
        <div className="movie-card-container" key={movie._id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </>
  );
};

export default MovieList;
