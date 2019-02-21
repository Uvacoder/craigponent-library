import React from 'react';
import PropTypes from 'prop-types';

function TelegramLogo({ fillColor, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" {...rest}>
      <g className="nc-icon-wrapper" fill={fillColor}>
        <path
          d="M23.953,2.527a.515.515,0,0,0-.349-.381,1.8,1.8,0,0,0-.945.067S1.63,9.772.429,10.609c-.258.18-.345.285-.388.408-.208.6.439.858.439.858L5.9,13.641a.59.59,0,0,0,.275-.016c1.232-.779,12.4-7.834,13.049-8.071.1-.03.177,0,.157.075-.258.905-9.909,9.478-9.962,9.53a.2.2,0,0,0-.072.177l-.506,5.292s-.212,1.647,1.435,0c1.168-1.169,2.289-2.137,2.849-2.608,1.864,1.287,3.869,2.71,4.734,3.455a1.506,1.506,0,0,0,1.1.423,1.236,1.236,0,0,0,1.051-.933S23.84,5.542,23.968,3.476c.013-.2.03-.332.032-.471A1.762,1.762,0,0,0,23.953,2.527Z"
          fill={fillColor}
        />
      </g>
    </svg>
  );
}

TelegramLogo.propTypes = {
  fillColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

TelegramLogo.defaultProps = {
  fillColor: '#AFB3BA',
  height: '14',
  width: '14',
};

export default TelegramLogo;
