// eslint-disable react/jsx-props-no-spreading
// Dependencies
import '@/components/input/style.less'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Field } from 'react-final-form'
import c from 'clsx'

// Components
import Small from '@/components/input/small'

// Shared
import * as utils from '@/components/form/utils'
import { getPreviewLink } from '@/store/actions/video'
import { SubscriptionSettigns } from '@/common/basic'

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

const Input: FC<InputProps> = ({
  type,
  name,
  styleCss,
  placeholder,
  subs,
  label,
  small,
  isValidation,
}): JSX.Element => {
  const dsp = useDispatch()

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
              onBlur={name === 'video.url' ? () => onGetLinkBlur(input.value) : undefined}
            />

            {meta.error && meta.touched ? <small className="form-text text-danger">{meta.error}</small> : <></>}

            <Small small={small} />
            <Small name={name} />
          </div>
        )
      }}
    </Field>
  )

  function onGetLinkBlur(value: string): void {
    if (!value) return
    dsp(getPreviewLink(value))
  }
}

export default Input
