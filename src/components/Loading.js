import React from 'react'
import { ImSpinner9 } from 'react-icons/im';
import styles from './Loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <ImSpinner9 size={85} className={styles.icon} />
    </div>
  )
}
