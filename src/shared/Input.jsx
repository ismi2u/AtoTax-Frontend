import React from 'react'

export const Input = (props) => {
  return (
    <React.Fragment>
         <div className='form-group'> 
        <label htmlFor={props.name} className="form-label ml-2">{props.label}</label>
       <div>
        <input className='form-Control ml-2 col-lg-10 col-sm-12 col-m-6 d-sm-m-0'
        style={{with:70}}
        onClick={props.onClick}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder || props.label}
        type={props.type || 'text'}
        autoComplete={props.type === 'password' ? 'new-password' : 'off'}
        disabled={props.disabled || false}
        />
        {props.isFormikSupported && props.isTouched && props.error && <div className="pt-2 form-error text-danger">{props.error}</div>}
        </div>
        </div>
    </React.Fragment>
  )
}
