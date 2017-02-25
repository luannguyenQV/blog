import Page from "../layouts/main";
import Link from "next/prefetch";
import { posts } from "./post";
import Head from "next/head";

export default () => (
  <Page>
    <Head>
      <title>Blog</title>
    </Head>
    <div>
      <h1>{`Essays & Thoughts`}</h1>
      <style jsx>
        {
          `
    h1 {
        margin: 5px 0 40px 0;
        font-size: 1.5rem;
        font-weight: 200;
        color: #454545;
      }
    `
        }
      </style>
    </div>
    <div className="posts">
      {posts.map(({ id, date, title }) => (
        <Post id={id} key={id} date={date} title={title} />
      ))}
    </div>
  </Page>
);

const Post = ({ id, date, title }) => (
  <div className="post">
    <p className="date">{date}</p>
    <Link href={`/${new Date(date).getFullYear()}/${id}`}><a>{title}</a></Link>
    <style jsx>
      {
        `
      .post {
        margin-bottom: 10px;
      }

      .date {
        display: inline-block;
        width: 140px;
        text-align: right;
        margin-right: 30px;
        color: #999;
      }

      a {
        text-decoration: none;
      }

      @media (max-width: 500px) {
        .post {
          margin-bottom: 15px;
        }

        .date {
          display: block;
          width: inherit;
          text-align: inherit;
          font-size: 11px;
          color: #ccc;
          margin-bottom: 5px;
        }
      }
    `
      }
    </style>
  </div>
);
