import React from 'react';
import Layout from '../components/Layout';
import BlogPost from '../components/BlogPost';

const blog = () => {
  return (
    <Layout>
      <h2>Blog Posts</h2>
      <BlogPost title="First post" date="29:11:2018" />
      <BlogPost title="Another post" date="27:11:2018" />
    </Layout>
  );
};

export default blog;
