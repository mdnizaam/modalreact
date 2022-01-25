import React from 'react';
import PostItems from './PostItems';
import "./PostList.css"

const PostList = (props) => {
  return (
  <ul className='list'>
      {props.posts.map(post=> 
      <PostItems id={post.id} 
      title={post.title} 
      image={post.image} 
      description={post.description}
      address={post.address}/>)}
  </ul>
    );
};

export default PostList;
