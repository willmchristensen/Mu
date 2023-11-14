import React from 'react';

const BandcampPlayer = ({url}) => {
  return (
    <iframe
      title="Bandcamp Player"
      width="350"
      height="470"
      src={url}
      frameBorder="0"
      seamless
    >
    </iframe>
  );
};

export default BandcampPlayer;
