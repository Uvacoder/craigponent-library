import React from 'react';
import { string, oneOfType, number } from 'prop-types';

function PencilSVG({ fillColor, ...rest }) {
  return (
    <svg viewBox="0 0 16 16" {...rest}>
      <g fill={fillColor}>
        <path
          data-color="color-2"
          d="M14.1,0.3c-0.4-0.4-1-0.4-1.4,0L6,7v3h3l6.7-6.7c0.4-0.4,0.4-1,0-1.4L14.1,0.3z"
        />
        <path
          fill={fillColor}
          d="M15,9c-0.6,0-1,0.4-1,1v4H2V2h4c0.6,0,1-0.4,1-1S6.6,0,6,0H1C0.4,0,0,0.4,0,1v14c0,0.6,0.4,1,1,1h14 c0.6,0,1-0.4,1-1v-5C16,9.4,15.6,9,15,9z"
        />
      </g>
    </svg>
  );
}

PencilSVG.propTypes = {
  className: string,
  fillColor: string,
  height: oneOfType([string, number]),
  width: oneOfType([string, number]),
};

PencilSVG.defaultProps = {
  className: 'edit-icon-svg',
  fillColor: '#389bff',
  height: '16px',
  width: '16px',
};

export default PencilSVG;
