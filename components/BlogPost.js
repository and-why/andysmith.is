import React from "react";
import styled from "styled-components";

const BlogPostCard = styled.div`
  width: 100%;
  padding: 2.5em;
`;

const BlogPost = () => {
  return (
    <BlogPostCard>
      <h2>npm blogTitle Title</h2>
      <p>> 30th November 2018</p>
    </BlogPostCard>
  );
};

export default BlogPost;
