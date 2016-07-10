import React from 'react';

function setClassName (xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset) {
  var className;
  console.log(xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset);
  (xs === false || xs === undefined || xs === null) ? xs = ' ' : xs = `col-xs-${xs} `;
  (sm === false || sm === undefined || sm === null) ? sm = ' ' : sm = `col-sm-${sm} `;
  (md === false || xs === undefined || md === null) ? md = ' ' : md = `col-md-${md} `;
  (lg === false || lg === undefined || lg === null) ? lg = ' ' : lg = `col-lg-${lg} `;
  (xsOffset == false || xsOffset === undefined || xsOffset === null) ? xsOffset = ' ' : xsOffset = `col-xs-offset-${xsOffset} `;
  (smOffset == false || smOffset === undefined || smOffset === null) ? smOffset = ' ' : smOffset = `col-sm-offset-${smOffset} `;
  (mdOffset == false || mdOffset === undefined || mdOffset === null) ? mdOffset = ' ' : mdOffset = `col-md-offset-${mdOffset} `;
  (lgOffset == false || lgOffset === undefined || lgOffset === null) ? lgOffset = ' ' : lgOffset = `col-lg-offset-${lgOffset} `;
  className = xs + sm + md + lg + xsOffset + smOffset + mdOffset + lgOffset;
  return className;
};

function Col (props) {
  var className = setClassName(props.xs, props.sm, props.md, props.lg, props.xsOffset, props.smOffset, props.mdOffset, props.lgOffset)

  return (
    <div className={className}>
      {props.children}
    </div>
  );
}

Col.propTypes = {
  xs: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
  sm: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
  md: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
  lg: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
  xsOffset: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
  smOffset: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
  mdOffset:React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
  lgOffset: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12])
};

export default Col;
