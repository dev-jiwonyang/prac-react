import React from 'react'
import classNames from 'classnames'

export default function MyComponent({ highlighted, theme }) {
  return (
    <div className={classNames('MyComponent', {highlighted}, theme)}>MyComponent</div>
  )
}
