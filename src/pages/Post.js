import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();

  return (
    <div>
      <h1>Post {id}</h1>
      {/* Add your blog post content here */}
    </div>
  );
}

export default Post;
