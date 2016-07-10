import React from 'react';

function Col (props) {
  return (
    <div className={`col-${props.type}-${props.size}`}>
      {props.children}
    </div>
  );
}

Col.propTypes = {
  type: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  size: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
  children: React.PropTypes.element
};

export default Col;
