import React from 'react';
import { useRecoilRefresher_UNSTABLE } from 'recoil';
import EyeIcon from '../assets/eye.svg';
import EyeWatched from '../assets/eye_watched.svg';
import { searchMoviesSelector } from '../recoil/selectors';
import toggleWatched from '../api/toggleWatched';

const Eye = (props: { watched: boolean; movieId: string }) => {
  const refresh = useRecoilRefresher_UNSTABLE(searchMoviesSelector);

  const handleClick = async () => {
    await toggleWatched(props.movieId, !props.watched);
    refresh();
  };

  return (
    <>
      {props.watched ? (
        // Inline-styling is used because it's only on these elements.
        <img data-cy="watched-eye" onClick={handleClick} style={{ cursor: 'pointer' }} src={EyeWatched} alt="Eye watched filled" />
      ) : (
        <img data-cy="unwatched-eye" onClick={handleClick} style={{ cursor: 'pointer' }} src={EyeIcon} alt="Eye unwatched unfilled" />
      )}
    </>
  );
};

export default Eye;
