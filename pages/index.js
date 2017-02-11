import Page from '../layouts/main'
import Link from 'next/prefetch'
import Head from 'next/head'
import Logo from '../static/white.svg'; 

export default () => (
  <Page>
    <Head>
      <title>Jhonny Arana</title>
    </Head>

    <div className="home">
      <div className="main">
        <Logo /> 
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
        background: #fff;
        
      }

      .main {
        flex: none;
        text-align: center;
      }

      h1 {
        font-size: 16px;
        font-weight: normal;
        color: #000;
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
