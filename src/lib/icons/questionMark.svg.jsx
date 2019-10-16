import React from 'react';
import { string, oneOfType, number } from 'prop-types';

function QuestionMark({ fillColor, ...rest }) {
  return (
    <svg viewBox="0 0 16 16" {...rest}>
      <g fill={fillColor}>
        <path
          fill={fillColor}
          d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M8,13c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1s1,0.4,1,1 C9,12.6,8.6,13,8,13z M9.5,8.4C9,8.7,9,8.8,9,9v1H7V9c0-1.3,0.8-1.9,1.4-2.3C8.9,6.4,9,6.3,9,6c0-0.6-0.4-1-1-1 C7.6,5,7.3,5.2,7.1,5.5L6.6,6.4l-1.7-1l0.5-0.9C5.9,3.6,6.9,3,8,3c1.7,0,3,1.3,3,3C11,7.4,10.1,8,9.5,8.4z"
        />
      </g>
    </svg>
  );
}

QuestionMark.propTypes = {
  fillColor: string,
  height: oneOfType([string, number]),
  width: oneOfType([string, number]),
};

QuestionMark.defaultProps = {
  fillColor: '#2F3337',
  height: 16,
  width: 16,
};

export default QuestionMark;
