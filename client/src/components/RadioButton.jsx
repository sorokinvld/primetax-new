import React from 'react'

function RadioButton({name, value, label, checked, onChange}) {
  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        name={name}
        value={value}
        className="form-radio"
        checked={checked}
        onChange={onChange}
      />
      <span className="ml-2 text-sm">{label}</span>
    </label>
  )
}

export default RadioButton