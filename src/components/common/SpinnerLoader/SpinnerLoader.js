import React from 'react';
import Loader from 'react-loader-spinner';

export default class SpinnerLoader extends React.Component {
  render() {
    return(
    <Loader
        type="Circles"
        color="#00BFFF"
        height={50}
        width={50}
        visible={this.props.visible}
        textAlign="center"
        />
    );
  }
}