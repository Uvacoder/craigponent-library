import React from 'react';
import { string, oneOfType, number } from 'prop-types';

function CurrencyDollar({ fillColor, ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      <g fill={fillColor}>
        <path
          fill={fillColor}
          d="M17.51,13.1c-1.112-1.234-3.358-2.015-4.635-2.502V5.621c1.413,0.109,2.834,0.447,4.266,1.012l0.998-2.502 c-1.659-0.684-3.414-1.057-5.264-1.121V0.754h-1.818v2.297C9.379,3.224,8.051,3.716,7.071,4.527c-0.98,0.812-1.47,1.846-1.47,3.104 c0,1.176,0.344,2.163,1.032,2.96c1.215,1.409,3.309,2.07,4.423,2.481v5.113c-1.7-0.018-4.026-0.616-5.564-1.367v2.885 c1.449,0.656,3.304,1.003,5.564,1.039v2.885h1.818V20.66c1.823-0.2,3.217-0.729,4.184-1.586c0.966-0.856,1.449-1.946,1.449-3.268 C18.508,14.74,18.175,13.838,17.51,13.1z M11.057,9.928C10.209,9.591,9.623,9.249,9.3,8.902C8.976,8.556,8.814,8.123,8.814,7.604 c0-0.501,0.191-0.92,0.574-1.258c0.383-0.337,0.938-0.561,1.668-0.67V9.928z M12.875,18.076v-4.361 c0.866,0.319,1.483,0.649,1.853,0.991s0.554,0.777,0.554,1.306C15.281,17.142,14.479,17.83,12.875,18.076z"
        />
      </g>
    </svg>
  );
}

CurrencyDollar.propTypes = {
  fillColor: string,
  height: oneOfType([string, number]),
  width: oneOfType([string, number]),
};

CurrencyDollar.defaultProps = {
  fillColor: '#333333',
  height: '24px',
  width: '24px',
};

export default CurrencyDollar;
