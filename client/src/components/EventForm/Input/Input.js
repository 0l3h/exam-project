import React from 'react'
import styles from './Input.module.sass'

function Input ({
  inputName,
  inputType,
  label,
  formikBag: { getFieldProps, touched, errors }
}) {
  return (
    <label className={styles.eventInput}>
      <span>{label}</span>

      <input
        type={inputType}
        name={inputName}
        autoComplete='off'
        {...getFieldProps(`${inputName}`)}
      />

      {touched[inputName] && errors[inputName] ? (
        <div className={styles.errorMessage}>{errors[inputName]}</div>
      ) : null}
    </label>
  )
}

export default Input
