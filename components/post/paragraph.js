export default ({ children }) => (
  <p>
    {children}
    <style jsx>
      {
        `
      p {
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 20px;          
      	display: block;
    	-webkit-margin-before: 1em;
    	-webkit-margin-after: 1em;
    	-webkit-margin-start: 0px;
    	-webkit-margin-end: 0px;
      }
    `
      }
    </style>
  </p>
);
