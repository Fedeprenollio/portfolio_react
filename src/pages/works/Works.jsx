import React from 'react'
import { Cards } from '../../components/cards/Cards'
import { works } from '../../works'

export const Works = () => {
  return (
    <div className="container">
     <div className='container row'>
      <h3>Web completas</h3>
      {works.map((work,index)=>{
        return(
         
            <Cards key={index} work={work}/>
        )
      })}
      <hr />
    </div>
    <div className="container">
      <h3>Componentes pequeños</h3>
      <h6>Mouse follower</h6>
     <iframe width={"100%"} src="https://react-practicas-mouse-follower.vercel.app/" frameborder="0"></iframe>
     
     <h6>Follower twitter buttons</h6>
     <iframe height={"250px"} width={"100%"} src="https://is-fallowint-twitter.vercel.app/" frameborder="0"></iframe>
     <h6>Ta-te-ti</h6>
     <iframe height={"600px"} width={"100%"} src="https://ta-te-ti-blue.vercel.app/" frameborder="0"></iframe>

     <h6>Traductor</h6>
     <iframe height={"600px"} width={"100%"} src="https://traductor-original.vercel.app/" frameborder="0"></iframe>
    </div>
    </div>
  )
}
