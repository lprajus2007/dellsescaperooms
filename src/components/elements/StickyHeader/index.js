import React from 'react';

import "./styles.scss"

class StickyHeader extends React.Component {
  render() {
    const { children, modifiers } = this.props;

    const modifierClasses = modifiers.length ? modifiers.reduce((result, modifier) => {
      result = `${result} sticky-header--${modifier}`;
      return result;
    }, '') : '';

    return (
      <div className={`sticky-header ${modifierClasses}`}>
        {children}
      </div>
    );
  }
}

export default StickyHeader;