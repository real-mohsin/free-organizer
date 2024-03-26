import { ChangeEvent } from 'react'
import './style.scss'

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password'
  label: string
  value: string | number
  name: string
  placeholder: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

function InputField( { type, label, value, name, placeholder, onChange }: InputProps ) {
  return (
    <div className='input-group'>
      <label className='lbl'>{label}</label>
      <input className='inpt-feld' type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}

export default InputField;