// eslint-disable react/jsx-props-no-spreading
// Dependencies
import React, { FC } from 'react'
import { Field } from 'react-final-form'
import { SubscriptionSettigns } from '@/types/common'
import c from 'clsx'

// Shared
import * as utils from '@/components/form/utils'

type InputProps = {
  type: 'text' | 'number' | 'email' | 'password'
  name: string
  styleCss?: string
  placeholder?: string
  subs?: SubscriptionSettigns
  label?: string
  small?: string
  isValidation: boolean
}

const Input: FC<InputProps> = (props): JSX.Element => {
  const { type, name, styleCss, placeholder, subs, label, small, isValidation } = props

  return (
    <Field<string>
      type={type}
      name={name}
      subscription={subs || utils.defaultSubs}
      placeholder={placeholder || ''}
      validate={isValidation ? utils.requiredValidation : undefined}
    >
      {({ input, meta }) => {
        return (
          <div className="form-group">
            <label htmlFor={input.name} className="first-letter-cap">
              {label}
            </label>
            <input
              {...input}
              className={c(styleCss, 'form-control', meta.error && meta.touched && 'invalid-input')}
              placeholder={placeholder}
            />
            {meta.error && meta.touched ? <small className="form-text text-danger">{meta.error}</small> : <></>}
            <small className="form-text text-muted">{small}</small>
          </div>
        )
      }}
    </Field>
  )
}

export default Input
