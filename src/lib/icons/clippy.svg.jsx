import React from 'react';
import { string, number, oneOfType } from 'prop-types';

function Clippy(props) {
  const { fillColor, ...rest } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      <g fill={fillColor}>
        <path
          fill={fillColor}
          d="M8.5,23.1c-1.9,0-3.8-0.7-5.3-2.2C1.8,19.5,1,17.6,1,15.6c0-2,0.8-3.9,2.2-5.3L11,2.5c2.1-2.1,5.6-2.1,7.8,0 s2.1,5.6,0,7.8l-7.1,7.1c-1.4,1.4-3.6,1.4-5,0c-1.4-1.4-1.4-3.6,0-5l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6 c-0.6,0.6-0.6,1.5,0,2.1c0.6,0.6,1.5,0.6,2.1,0l7.1-7.1c0.7-0.7,1-1.5,1-2.5c0-0.9-0.4-1.8-1-2.5c-1.4-1.4-3.6-1.4-4.9,0l-7.8,7.8 c-1,1-1.6,2.4-1.6,3.9c0,1.5,0.6,2.8,1.6,3.9c2.1,2.1,5.6,2.1,7.8,0l8.8-8.8c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-8.8,8.8 C12.4,22.4,10.5,23.1,8.5,23.1z"
        />
      </g>
    </svg>
  );
}
Clippy.propTypes = {
  className: string,
  fillColor: string,
  height: oneOfType([string, number]),
  width: oneOfType([string, number]),
};

Clippy.defaultProps = {
  className: '',
  fillColor: '#389bff',
  height: 24,
  width: 24,
};

export default Clippy;
