import React from 'react';
import PropTypes from 'prop-types';
import Style from './Button.module.scss';
// eslint-disable-next-line react/function-component-definition
export default function Button({
  children, type, onClick, name,
}) {
  return (
    <div className={Style.Button__container}>
      <button
        className={Style.Button__btn}
        type={type}
        onClick={onClick}
        name={name}
      >
        {children}

      </button>
    </div>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};
