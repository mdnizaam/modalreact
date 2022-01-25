import React from 'react';
import Card from '../ui/Card';
import './PostItems.css'

const PostItems = (props) => {
  return (
    
  <li className='item'>
      <Card>
      <div className='image'>
          <img src={props.image}/>
      </div>
      <div className='content'>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
      </div>
      <div className='actions'>
          <button>Add To Favorite</button>
      </div>
      </Card>
  </li>
 
    );
};

export default PostItems;
