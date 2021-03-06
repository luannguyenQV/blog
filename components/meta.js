import Head from "next/head";

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/static/favicon.ico" type="image/png" />
    </Head>

    {/* global styles */}
    <style jsx global>
      {
        `
      * {
        margin: 0;
        box-sizing: border-box;
      }

      body {
        font: 14px monospace;
	background: #fff;
      }

      a {
        color: #ff2d55;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }

      a:hover {
        color: #fff;
        background: #ff2d55;
        text-decoration: none;
      }
      
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #ff2d55;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2.1px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #ff2d55, 0 0 5px #ff2d55;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `
      }
    </style>
  </div>
);
