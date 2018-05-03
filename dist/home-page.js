import React from 'react';

const styles = {
  body: {
    color: '#595959',
    fontFamily: 'monospace'
  },
  center: {
    textAlign: 'center'
  },
  h6: {
    marginBottom: 0
  },
  ul: {
    listStyle: 'none',
    marginLeft: '20px'
  },
  code: {
    marginBottom: '25px'
  }
};

const Html = () => React.createElement(
  'html',
  { lang: 'en' },
  React.createElement(
    'head',
    null,
    React.createElement(
      'title',
      null,
      'q4 Weather'
    ),
    React.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css' })
  ),
  React.createElement(
    'body',
    { style: styles.body },
    React.createElement(
      'div',
      { id: 'app' },
      React.createElement(
        'h1',
        { style: styles.center },
        'q4 Weather API'
      ),
      React.createElement(
        'p',
        { style: styles.center },
        'An Api written on Node and express to get weather info!'
      ),
      React.createElement(
        'h4',
        null,
        'End points:'
      ),
      React.createElement(
        'h5',
        null,
        '- /api/temperature/<city>'
      ),
      React.createElement(
        'h6',
        { style: styles.h6 },
        'Parameters:'
      ),
      React.createElement(
        'ul',
        { style: styles.ul },
        React.createElement(
          'li',
          null,
          React.createElement(
            'strong',
            null,
            'city:'
          ),
          ' city name'
        )
      ),
      React.createElement(
        'h6',
        { style: styles.h6 },
        'Status:'
      ),
      React.createElement(
        'ul',
        { style: styles.ul },
        React.createElement(
          'li',
          null,
          React.createElement(
            'strong',
            null,
            '200:'
          ),
          ' Success'
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'strong',
            null,
            '400:'
          ),
          ' Error, Possible cause is invalid city name'
        )
      ),
      React.createElement(
        'h6',
        { style: styles.h6 },
        'Example Out:'
      ),
      React.createElement(
        'div',
        { style: styles.code },
        React.createElement(
          'code',
          null,
          '{"city": "Thiruvananthapuram","temperature":"29","unit":"c"}'
        )
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'a',
          { className: 'button button-primary', href: '/api/temperature/bengaluru' },
          'Bengaluru'
        ),
        React.createElement(
          'a',
          { className: 'button', style: { margin: '0px 10px' }, href: '/api/temperature/delhi' },
          'Delhi'
        ),
        React.createElement(
          'a',
          { className: 'button button-primary', href: '/api/temperature/thiruvananthapuram' },
          'Thiruvananthapuram'
        )
      )
    )
  )
);

export default Html;