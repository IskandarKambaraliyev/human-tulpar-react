import React from 'react';
import "./line.scss";

const Line = ({className}) => {
  return (
    <div className={`${className} lines`}>
        <div className="line">
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Line