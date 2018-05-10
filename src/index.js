import React from 'react'

export default ({ code }) => {
  return (
    <svg
      style={{
        width: '1em',
        height: '1em',
        verticalAlign: '-0.15em',
        fill: 'currentColor',
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      <use xlinkHref={`#icon-${code}`} />
    </svg>
  )
}
