import React, { useState } from 'react';
import EyeIcon from '../assets/eye.svg';
import EyeWatched from '../assets/eye_watched.svg';
import toggleWatched from '../api/toggleWatched';

const Eye = (props: { watched: boolean; movieId: string }) => {
  const [eyeState, setEyeState] = useState(props.watched);

  const handleClick = async () => {
    await toggleWatched(props.movieId, !eyeState);

    setEyeState(!eyeState);
  };

  return (
    <>
      {eyeState ? (
        // Inline-styling is used because it's only on these elements.
        <img data-cy="watched-eye" onClick={handleClick} style={{ cursor: 'pointer' }} src={EyeWatched} alt="Eye watched filled" />
      ) : (
        <img data-cy="unwatched-eye" onClick={handleClick} style={{ cursor: 'pointer' }} src={EyeIcon} alt="Eye unwatched unfilled" />
      )}
    </>
  );
};

export default Eye;
