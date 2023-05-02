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
      <hr />
     <iframe src="https://react-practicas-mouse-follower.vercel.app/" frameborder="0"></iframe>
    </div>
  )
}
