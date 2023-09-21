import React from 'react';

const BandcampPlayer = ({url}) => {
  return (
    <iframe
      title="Bandcamp Player"
      width="350"
      height="470"
      src="https://bandcamp.com/EmbeddedPlayer/album=3875264052/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=888794823/transparent=true/"
      frameBorder="0"
      seamless
    >
      <a href="https://overmono.bandcamp.com/album/good-lies">Good Lies by Overmono</a>
    </iframe>
  );
};

export default BandcampPlayer;
