import React from 'react'
import { Cards } from '../../components/cards/Cards'
import { works } from '../../works'

export const Works = () => {
  return (
    <div className='container row'>
      {works.map((work,index)=>{
        return(
         
            <Cards key={index} work={work}/>
        )
      })}
    </div>
  )
}
