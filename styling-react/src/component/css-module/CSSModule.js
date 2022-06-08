import React from 'react'
import styles from './CSSModule.module.css'
import classNames from 'classnames'

const cx = classNames.bind(styles)

function CSSModule() {
  return (
    <div className={cx('amugona')}>
        안녕하세요! <span className='something'>CSS Module!</span>
    </div>
  )
}

export default CSSModule