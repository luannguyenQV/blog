import Page from "../layouts/main";
import Link from "next/link";
import Head from "next/head";
import Logo from "../static/white.svg";
// ultima version
export default () => (
  <Page>
    <Head>
      <title>Jhonny Arana</title>
    </Head>
    <div className="home">
      <div className="main">
        <div className="logo"><Logo /></div>
        <h1>Arana Jhonny</h1>
        <nav>
          <a target="_blank" href="https://twitter.com/aranajhonny">Twitter</a>
          <a target="_blank" href="https://github.com/aranajhonny">Github</a>
          <Link prefetch href="/blog"><a>Thoughts</a></Link>
          <a href="mailto:jhonnyjosearana@gmail.com">Email</a>
        </nav>
      </div>
    </div>
    <style jsx>
      {
        `
      .home {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
        background: #fff;
        
      }

      .main {
        flex: none;
        text-align: center;
      }

      h1 {
        margin: 0;
        font-size: 1.8rem;
        font-weight: 200;
        color: #454545;
      }

      nav {
        margin-top: 20px;
      }

      a {
        display: inline-block;
        margin: 20px 20px 0 20px;
        text-decoration: none;
      }
    `
      }
    </style>
  </Page>
);
