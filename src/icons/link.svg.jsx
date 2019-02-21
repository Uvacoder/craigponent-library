import React from 'react';
import { string, oneOfType, number } from 'prop-types';

function LinkSVG({ fillColor, ...rest }) {
  return (
    <svg viewBox="0 0 22 22" {...rest}>
      <g fill={fillColor} fillRule="evenodd">
        <path d="M13.242 8.758a6.01 6.01 0 0 0-1.659-1.169A1.99 1.99 0 0 0 11 9c0 .213.04.415.102.608.259.161.505.343.726.564A3.977 3.977 0 0 1 13 13a3.978 3.978 0 0 1-1.171 2.829l-3 2.999c-1.512 1.512-4.146 1.512-5.657 0A3.973 3.973 0 0 1 2 16c0-1.068.416-2.072 1.171-2.828l2.104-2.104A8.05 8.05 0 0 1 5 9c0-.162.013-.323.023-.483-.089.079-.18.156-.266.241l-3 3A5.959 5.959 0 0 0 0 16c0 1.603.624 3.109 1.757 4.242A5.96 5.96 0 0 0 6 22a5.96 5.96 0 0 0 4.243-1.758l3-2.999A5.967 5.967 0 0 0 15 13a5.96 5.96 0 0 0-1.758-4.242z" />
        <path d="M20.243 1.758A5.96 5.96 0 0 0 16 0a5.96 5.96 0 0 0-4.243 1.758l-3 2.999A5.967 5.967 0 0 0 7 9c0 1.603.624 3.109 1.757 4.242a6.01 6.01 0 0 0 1.659 1.169c.376-.377.584-.879.584-1.411 0-.218-.041-.425-.106-.622a3.7 3.7 0 0 1-.721-.55A3.974 3.974 0 0 1 9 9c0-1.068.416-2.073 1.171-2.829l3-2.999A3.975 3.975 0 0 1 16 2c1.068 0 2.073.416 2.829 1.172A3.976 3.976 0 0 1 20 6a3.976 3.976 0 0 1-1.171 2.828l-2.107 2.107C16.9 11.601 17 12.292 17 13c0 .162-.012.322-.021.482.089-.079.18-.155.265-.24l3-3A5.962 5.962 0 0 0 22 6a5.959 5.959 0 0 0-1.757-4.242z" />
      </g>
    </svg>
  );
}

LinkSVG.propTypes = {
  fillColor: string,
  height: oneOfType([string, number]),
  width: oneOfType([string, number]),
};

LinkSVG.defaultProps = {
  fillColor: '#00CE7D',
  height: '22px',
  width: '22px',
};

export default LinkSVG;
