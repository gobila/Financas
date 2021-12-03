import React from 'react';
import PropTypes from 'prop-types';
import Style from './Tag.module.scss';

const Tag = function ({ children, style }) {
  const ha = Style[style];
  return (
    <div className={ha}>
      {children}
    </div>
  );
};
Tag.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};
Tag.defaultProps = {
  style: '',
};

export default Tag;
