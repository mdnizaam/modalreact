import React from 'react';
import "../../index.css";


const BackDrop = (props) => {
  return <div className='backdrop' onClick={props.onCancel}/>;
};

export default BackDrop;