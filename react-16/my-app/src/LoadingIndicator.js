import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoadingIndicator extends Component {
  render() {
      if(this.props.isLoading){
        return null
      }
      return this.props.children;
   
  }
}

export default LoadingIndicator

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};