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
        <img
          style={{ cursor: 'pointer' }}
          src={EyeWatched}
          alt="Eye watched filled"
          tabIndex={0}
          data-cy="watched-eye"
          onClick={handleClick}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        />
      ) : (
        <img
          style={{ cursor: 'pointer' }}
          src={EyeIcon}
          alt="Eye unwatched unfilled"
          tabIndex={0}
          data-cy="unwatched-eye"
          onClick={handleClick}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        />
      )}
    </>
  );
};

export default Eye;
