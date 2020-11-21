// Dependencies
import { SubscriptionSettigns } from '@/types/common'
import React, { FC } from 'react'
import { Field } from 'react-final-form'

// Shared
import * as utils from './utils'

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
    <div className="form-group">
      <label htmlFor={name} className="first-letter-cap">
        {label}
      </label>
      <Field<string>
        type={type}
        name={name}
        component="input"
        className={styleCss || 'form-control'}
        subscription={subs || utils.defaultSubs}
        placeholder={placeholder || ''}
      />
      <small id="emailHelp" className="form-text text-muted">
        {small}
      </small>
    </div>
  )
}

export default Input
