import { skills } from '@/data/personaldata'
import React, {useId} from 'react'
import Skills from './Skills'
 

export default function AboutMe({data, skills }:any) {
    const {title, body}= data
    const id = useId()
  return (
    <section>
        <h2 className='mb-8'>
            {title}
        </h2>
        
        {body.map((ele:string, i:number)=> (
          
        <p key={`${id}_${i}`} className='mb-6'>{ele}</p>)) }
        <Skills data={skills}/>
    </section>
  )
}
