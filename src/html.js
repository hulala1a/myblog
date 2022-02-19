import React from 'react'
import PropTypes from 'prop-types'
import loading from './static/images/loading.png'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`loader`}
          id='___loader'
          style={{
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            opacity: 0.9,
            display: 'flex',
            justifyContent: 'center',
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 200,
          }}
        >
          <img className='head' src={loading} alt='loading spinner' width='150' height='150' />
          <img className='body1' src={loading} alt='loading spinner' width='150' height='150' />
          <img className='body2' src={loading} alt='loading spinner' width='150' height='150' />
          <img className='foot' src={loading} alt='loading spinner' width='150' height='150' />
        </div>
        <div key={`body`} id='___gatsby' dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
