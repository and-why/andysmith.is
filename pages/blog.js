import React from "react";
import Layout from "../components/Layout";
import BlogPostLink from "../components/BlogPostLink";

const data = {
  posts: [
    {
      title: "first post",
      date: "27:11:2019",
      content: "This is the content for the first blog post"
    },
    {
      title: "Another post",
      date: "27:11:2018",
      content: "This is the content for the another blog post"
    }
  ]
};

const blog = () => {
  return (
    <Layout>
      <h1>Blog Posts</h1>
      {console.log(data.posts)}
      {data.posts.map(post => (
        <BlogPostLink
          title={post.title}
          date={post.date}
          content={post.content}
        />
      ))}
    </Layout>
  );
};

export default blog;
