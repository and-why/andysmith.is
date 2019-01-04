import React from "react";
import styled from "styled-components";
import Link from "next/link";

const BlogPostCard = styled.div`
  width: 100%;
  padding: 0.25em;
  .post__wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 10px;
    &:before {
      content: "\u2713";
      position: absolute;
      left: -2em;
      color: #1dc121;
    }
  }
  .date__wrap {
    justify-self: flex-end;
  }
  .date {
    color: #585858;
  }
`;

const BlogPostLink = props => {
  return (
    <BlogPostCard>
      <Link
        href={{
          pathname: "/blog-post",
          query: {
            title: `${props.title}`,
            content: `${props.content}`,
            date: `${props.date}`
          }
        }}
      >
        <a className="post__wrapper">
          <h2>{props.title}</h2>
          <div className="date__wrap">
            {" "}
            <span className="date"> {props.date}</span>
          </div>
        </a>
      </Link>
    </BlogPostCard>
  );
};

export default BlogPostLink;
