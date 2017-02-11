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
        color: rgb(255,59,48);
        text-decoration: none;
        font-size: 1.5rem;
      }

      a:hover {
        background-color:  rgb(255,59,48);
        color: #fff;
      }
    `}</style>
  </h1>
)