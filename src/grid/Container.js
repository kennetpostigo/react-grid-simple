import React from 'react';

function Container (props) {
  return (
    <div className={(props.fluid) ? 'container-fluid' : 'fluid'}>
      {props.children}
    </div>
  );
}

Container.propTypes = {
  fluid: React.PropTypes.bool
};

export default Container;
