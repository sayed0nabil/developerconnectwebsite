import React from 'react';
import classnames from 'classnames';
function SelectListFieldGroup({
    errors,
    id,
    name,
    values,
    value,
    label,
    changeStatus
}) {
  const options = values.map(item => (<option key={item.label} value={item.value}>{item.label}</option>))
  return (
    <div className='row my-3'>
    <div className="form-group col-md-8 m-auto">
       <label>{label}</label>
        <select 
        className='form-control'
        onChange={changeStatus}
        id={id}
        value={value}>
        {options}
        </select>
        {errors[name]?(
        <small className='form-text text-danger'>
            {errors[name]}
        </small>
        ):null}
  </div>
  </div>
  )
}
export default SelectListFieldGroup;
