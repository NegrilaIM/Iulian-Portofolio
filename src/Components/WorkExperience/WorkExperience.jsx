import React from 'react'
import Achievements from './WorkExperienceAPI'
import Card from './Card'
import './WorkExperience.css'

const WorkExperience = () => {
  return (
    <>
        <section className='Resume' id='resume'>
            <div className="container top">
                <div className="heading text-center">
                    <h1>Education and Work Experience</h1>
                </div>
                <div className="content-section mtop d_flex">
                    <div className="left">
                        <div className="heading">
                            <h4 >2012-2022</h4>
                            <h1 >Eduaction</h1>
                        </div>
                        <div className="content">
                            {Achievements.map((ach, index) => {
                                if (ach.category === 'education') {
                                    return (
                                        <Card key={index} title={ach.title} year={ach.year} rate= {ach.rate} description={ach.description} prof={ach.prof}/>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className="left">
                        <div className="heading">
                            <h4>2016-2023</h4>
                            <h1>Work Experience</h1>
                        </div>
                        <div className="content">
                            {Achievements.map((ach, index) => {
                                if (ach.category === 'experience') {
                                    return (
                                        <Card key={index} title={ach.title} year={ach.year} rate= {ach.rate} description={ach.description} prof={ach.prof}/>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WorkExperience