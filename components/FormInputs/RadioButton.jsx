import React from 'react'

export default function RadioButton({
    header, 
    title, 
    name1,
    name2, 
    register,
    type ="radio"}) {
  return (
    
<div className='flex gap-6 items-center text-sm font-medium'>
<p>{header}</p>
  <div className='flex gap-2 items-center'>
    <input type={type} {...register(`${title}`)} value={name1} id={name1} />
    <label htmlFor={name1}>{name1}</label>
  </div>

  <div className='flex gap-2 items-center'>
    <input type={type} {...register(`${title}`)} value={name2} id={name2} />
    <label htmlFor={name2}>{name2}</label>
  </div>

</div>
  )
}
