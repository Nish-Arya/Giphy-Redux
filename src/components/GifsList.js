import React from 'react';

const GifsList = ({ gifUrls }) => (
  <div>
    {
      gifUrls.map(url => {
        return (
          <img key={url} src={url} alt={url} />
        )
      })
    }
  </div>
);

export default GifsList;
