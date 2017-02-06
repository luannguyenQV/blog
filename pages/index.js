import Page from '../layouts/main'
import Link from 'next/prefetch'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>Jhonny Arana</title>
    </Head>

    <div className="home">
      <div className="main">
        <img src="/static/logo.png" alt="Nuxt.js Logo" class="logo" />
        <h1>Jhonny Arana</h1>
        <nav>
          <a target="_blank" href="https://twitter.com/aranajhonny">Twitter</a>
          <a target="_blank" href="https://github.com/aranajhonny">Github</a>
          <Link href="/blog"><a>Blog</a></Link>
          <a href="mailto:jhonnyjosearana@gmail.com">Email</a>
        </nav>
      </div>
    </div>

    <style jsx>{`
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
        background: black;
        
      }

      .main {
        flex: none;
        text-align: center;
      }

      h1 {
        font-size: 14px;
        font-weight: normal;
        color: #fff;
      }

      nav {
        margin-top: 20px;
      }

      a {
        display: inline-block;
        margin: 0 15px;
        text-decoration: none;
      }
    `}</style>
  </Page>
)
