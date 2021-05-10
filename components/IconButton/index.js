import React from 'react'
import styles from './index.module.scss'

function IconButton({children, ...rest}) {
  return (
    <div className={"items-center flex text-center " + styles.IconButton} {...rest}>
      <div className={"m-auto items-center " + styles.wrapper}>
        {children}
      </div>
    </div>
  );
}

export default IconButton;