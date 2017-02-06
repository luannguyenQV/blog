import Meta from '../components/meta'
import Link from 'next/prefetch'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ children }) => (
  <div className="main">
    <div className="logo">
      <Link href="https://jhonny.now.sh"><a>Home</a></Link>
      {' '}
      <a href={`https://github.com/aranajhonny/blog`} target="_blank">( src )</a>
    </div>

    { children }

    { /* global styles and meta tags */ }
    <Meta />
    <style jsx global >{`
      /* loading progress bar styles */
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #FF2E88;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #FF2E88, 0 0 5px #FF2E88;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }
      `}</style>
    { /* local styles */ }
    <style jsx>{`
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
    `}</style>
  </div>
)