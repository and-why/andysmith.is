import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const BlogPostCard = styled.div`
  width: 100%;
  padding: 0.25em;
  .post__wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    &:before {
      content: '\u2713';
      position: absolute;
      left: -2em;
      color: #1dc121;
    }
  }
  h2 {
    font-size: 16px;
    padding: 0;
    margin: 0;
  }
  a {
    color: white;
    text-decoration: none;
    padding: 0.25em;
    /* &:visited {
      margin-right: 1em;
      color: #1dc121;
    } */
    &:hover {
      outline: 1px solid white;
    }
  }
  .date__wrap {
    justify-self: flex-end;
  }
  .date {
    color: #585858;
  }
`;

const BlogPost = props => {
  return (
    <BlogPostCard>
      <Link href="">
        <a className="post__wrapper">
          <h2>{props.title}</h2>
          <div className="date__wrap">
            {' '}
            <span className="date"> {props.date}</span>
          </div>
        </a>
      </Link>
    </BlogPostCard>
  );
};

export default BlogPost;
