export default ({ children }) => (
  <h1>
    <a href="#">{ children }</a>
    <style jsx>{`
      h1 {
        font: 18px Helvetica Neue, Helvetica,
          Arial, "Lucida Grande", sans-serif;
        font-weight: 500;
        margin-bottom: 10px;
      }

      a {
        color: #22BAD9;
        text-decoration: none;
      }

      a:hover {
        background-color: #22BAD9;
        color: #fff;
      }
    `}</style>
  </h1>
)
