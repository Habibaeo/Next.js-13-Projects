import { aboutMe, professionalData, skills } from '../data/personaldata';
import React from 'react'
import AboutMe from '@/component/AboutMe'
import ProfessionalExp from '@/component/ProfessionalExp';


export default function page() {
  return (
    <>
    <AboutMe data={aboutMe} skills={skills}/>
    <ProfessionalExp data={professionalData} />
    </>
  )
}



