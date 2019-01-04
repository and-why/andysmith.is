import { withRouter } from "next/router";
import Layout from "../components/Layout";
import Link from "next/link";

const BlogPost = withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    {console.log(props.router)}
    <div>{props.router.query.date}</div>
    <p>{props.router.query.content}</p>
    <Link href="/blog">
      <a>&lt; _back now</a>
    </Link>
  </Layout>
));

export default BlogPost;
