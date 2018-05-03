import React from 'react';

const styles = {
  body: {
    color: '#595959',
    fontFamily: 'monospace',
    display: 'flex',
    justifyContent: 'center',
  },
  app: {
    maxWidth: '750px',
    display: 'inline-block',
  },
  center: {
    textAlign: 'center',
  },
  h6: {
    marginBottom: 0,
  },
  ul: {
    listStyle: 'none',
    marginLeft: '20px',
  },
  code: {
    marginBottom: '25px',
  },
  button: {
    color: '#333',
  },
};

const Html = () => (
  <html lang="en">
    <head>
      <title>q4 Weather</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
    </head>
    <body style={styles.body}>
      <div id="app">
        <h1 style={styles.center}>q4 Weather API</h1>
        <p style={styles.center} >An Api written on Node and express to get weather info!</p>
        <h4>End points:</h4>
        <h5>- /api/temperature/&lt;city&gt;</h5>
        <h6 style={styles.h6}>Parameters:</h6>
        <ul style={styles.ul}>
          <li><strong>city:</strong> city name</li>
        </ul>
        <h6 style={styles.h6}>Status:</h6>
        <ul style={styles.ul}>
          <li><strong>200:</strong> Success</li>
          <li><strong>400:</strong> Error, Possible cause is invalid city name</li>
        </ul>
        <h6 style={styles.h6}>Example Out:</h6>
        <div style={styles.code}>
          <code>
            {'{"city": "Thiruvananthapuram","temperature":"29","unit":"c"}'}
          </code>
        </div>
        <div>
          <a style={styles.button} className="button button-primary" href="/api/temperature/bengaluru">Bengaluru</a>
          <a className="button" style={{ margin: '0px 10px' }} href="/api/temperature/delhi">Delhi</a>
          <a style={styles.button} className="button button-primary" href="/api/temperature/thiruvananthapuram">Thiruvananthapuram</a>
        </div>
      </div>
    </body>
  </html>
);

export default Html;
