import React from 'react'
import '../styles/Project.css'
import ProjectImg from '../../assets/netflix_clone.png'

const description = "Welcome to FlutterFlix, your ultimate destination for streaming the latest and greatest movies and TV shows right from your Flutter-powered device! Immerse yourself in a world of entertainment with our Netflix-inspired app, designed and developed using the power of Flutter." 
const projectTitle = "Netflix Clone by using flutter"
const projectRating = "89%"
const projectDev = "Apex User"
const projectDate = "24-5-2024"
const projectTechList = ["Dart", "HTML", "Java", "ReactJS","Dart"]

function Project() {
  return (
    <div>
        <div className='project-body'>
            <div className='project-title'><h2>{projectTitle}</h2></div>
                
                {/*-----------PROJECT CARD---------- */}
                <div className="project-card">
                    <div className="project-image">
                        <img src={ProjectImg} alt="Project img" />
                    </div>
                    <div className="project-info">
                        <p>{description}</p>
                        <div className='project-rating project-info-title'>All Reviews: <h6>{projectRating}</h6></div>
                        <div className='project-developer project-info-title'>Developer: <h6>{projectDev}</h6></div>
                        <div className='project-date project-info-title'>Uploaded : {projectDate}</div>
                        <div className='project-tech-used project-info-title'>
                            <h4>Tech Used:</h4> 
                            {projectTechList.map((tech, index) => (
                                <span key={index} className='project-tech-logo'>{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>


                {/* PROJECT FOLLOW BAR*/}
                <div className='project-wishlish-bar'>
                    <div className='project-wishlist-title'>You can save this project to your list and can also follow developer</div>
                    <button className="saved button">Save</button>
                    <button className="follow button">Follow</button>
                </div>


                {/* PROJECT ABOUT BAR */}
                <div className='project'>

                </div>
        </div>
    </div>
  )
}

export default Project