import React from 'react';
import Loader from 'react-loader-spinner';

function LoaderIndicator(props) {
  return (
    <Loader
      visible={true}
      type="ThreeDots"
      color="grey"
      height={40}
      width={40}
    />
  );
}
//not in use
export default LoaderIndicator;
