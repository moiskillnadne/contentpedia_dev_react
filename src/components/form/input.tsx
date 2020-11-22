// eslint-disable react/jsx-props-no-spreading
// Dependencies
import React, { FC } from 'react'
import { Field } from 'react-final-form'
import { SubscriptionSettigns } from '@/types/common'

// Shared
import * as utils from '@/components/form/utils'

type InputProps = {
  type: 'text' | 'number' | 'email' | 'password'
  name: string
  styleCss?: string
  placeholder?: string
  subs?: SubscriptionSettigns
  label: string
  small?: string
}

const Input: FC<InputProps> = (props): JSX.Element => {
  const { type, name, styleCss, placeholder, subs, label, small } = props

  return (
    <Field<string> type={type} name={name} subscription={subs || utils.defaultSubs} placeholder={placeholder || ''}>
      {({ input, meta }) => {
        return (
          <div className="form-group">
            <label htmlFor={input.name} className="first-letter-cap">
              {label}
            </label>
            <input {...input} className={styleCss || 'form-control'} placeholder={placeholder} />
            {meta.error && meta.touched ? <small className="form-text text-danger">{meta.error}</small> : <></>}
            <small className="form-text text-muted">{small}</small>
          </div>
        )
      }}
    </Field>
  )
}

export default Input
