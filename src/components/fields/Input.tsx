import React, { HTMLProps } from 'react'

type InputProps = {
  label: string;
  type?: string;
  id?: string;
  isRequired?: boolean;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  id,
  type = "text",
  isRequired = true,
  placeholder = "",
  value,
  onChange,
  ...rest
}: InputProps & HTMLProps<HTMLInputElement>) => {
  return (
    <div className="py-3">
      <label htmlFor="">{label} {isRequired && (<span className="text-red-600">*</span>)}</label>
      <input
        className={
          `block w-full rounded-sm p-2 bg-slate-100 text-black
          outline-none focus:outline-blue-500 focus:outline-2 mt-2
          `
        } 
        type={type}
        required={isRequired}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        {...rest}
      />
    </div>
  )
}

export default Input