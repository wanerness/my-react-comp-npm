import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { trim } from './utils/util';

class ReactComp extends Component {
  render() {
    const { onClick, title } = this.props;
    return (
      <div>
        <button onClick={onClick}>{trim(title)}</button>
      </div>
    );
  }
}

ReactComp.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
};

export default ReactComp;
