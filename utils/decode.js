import React from 'react';

export const decodeString = (string) => {
  return React.createElement('span', {
    dangerouslySetInnerHTML: { __html: string }
  });
}

export const decodeStringClip = (string, wordNum) => {
  let clippedString = string.split(' ').slice(0, wordNum).join(' ');
  return decodeString(clippedString);
}
