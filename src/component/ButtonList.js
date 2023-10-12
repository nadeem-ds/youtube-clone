import React from 'react'
import Button from './Button'

const data = [
  {
    'id':1,
    'name':'All'
  },
  {
    'id':2,
    'name':'Music'
  },
  {
    'id':3,
    'name':'Crime'
  },
  {
    'id':4,
    'name':'Thriller'
  },
  {
    'id':5,
    'name':'suspense'
  },
  {
    'id':6,
    'name':'gaming'
  },
  {
    'id':7,
    'name':'News'
  },
  {
    'id':8,
    'name':'Movies'
  },
  {
    'id':9,
    'name':'Cricket'
  },
];
const ButtonList = () => {
  return (
    <div className='flex'> 
    {data.map((item)=>{
     return <div key={item.id}>
       <Button name={item.name}/> 
      </div>
    })}
     {/* <Button/>
     <Button/>
     <Button/>
     <Button/> */}
    </div>
  )
}

export default ButtonList