import Meta from "../components/meta";
import Link from "next/prefetch";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children }) => (
  <div className="main">
    <div className="logo">
      <Link href={"/"}><a>Home</a></Link>
      {" ("}
      <a href={`https://github.com/aranajhonny/blog`} target="_blank">src</a>
      {")"}
    </div>

    {children}
    <Meta />
    <style jsx>
      {
        `
      .main {
        padding: 25px 50px;
      }

      .logo {
        padding-bottom: 50px;
      }

      a {
        text-decoration: none;
      }

      @media (max-width: 500px) {
        .main {
          padding: 25px 15px;
        }

        .logo {
          padding-bottom: 20px;
        }
      }
    `
      }
    </style>
  </div>
);
