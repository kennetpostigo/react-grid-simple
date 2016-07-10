import React from 'react';

function Row (props) {
  return (
    <div className='row'>
      {props.children}
    </div>
  );
}

Row.propTypes = {
  children: React.PropTypes.element
};

export default Row;
