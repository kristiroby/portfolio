import React from 'react';
import { Link } from 'react-router-dom';
const Resume = () => {
    return (
        <div className='resume-container'>
            <h5 className='center'>Kristi Roby</h5>
            <h6 className='center'>Software Engineer | Minneapolis, MN</h6>
            <div className='header center'>
                <a href="github.com/kristiroby" className="github white-text"> GitHub     </a> 
                <a href="linkedin.com/in/kristiroby" className="linkedin white-text">     LinkedIn     </a>
                <Link to="/contact" className="email white-text">     kroby.dev@gmail.com     </Link>
                <span id="number">     612-234-5956   </span>
            </div>
            <div className='summary'>
                <ul>
                    <li><h6>Summary</h6></li>
                    <li>Software engineer with a background in human resources and technical recruiting. Rapid relationship-builder who navigates and communicates between all levels of an organization. Big picture thinker adept in establishing priorities and outlining pathways from ambiguous direction. </li>
                </ul>
            </div>
            <div className='skills'>
                <ul>
                    <li><strong><h6>Skills</h6></strong></li>
                    <li><strong>Languages:</strong> Javascript, HTML, CSS, Ruby, SQL</li>
                    <li><strong>Databases:</strong> MongoDB, Postgres</li>
                    <li><strong>Frameworks:</strong> React, Redux, Angular, Express, jQuery, Materialize, Bootstrap, Skeleton</li>
                    <li><strong>Other:</strong> Node.js, AJAX, Mongoose, Heroku, Github, Firebase, Google Cloud Functions</li>
                </ul>
            </div>
            <div className='programming-experience'>
                <ul>
                    <li><h6>Programming Experience</h6></li>
                    <li><a href="https://kristiroby.github.io/movie-app/" className="app white-text">Movie List:</a> Programmed application using Javascript, jQuery, HTML, CSS, and AJAX.</li>
                    <li><a href="https://stable-genius.herokuapp.com/horses" className="app white-text">Stable Genius:</a> Developed full-stack MVC RESTful app using Javascript, HTML, CSS, and deployed via Heroku</li>
                    <li><a href="https://corded-essence-252619.web.app/" className="app white-text">Lizzpiration:</a> Created React/Redux app using Google Cloud Functions, Firebase hosting, and Materialize.</li>
                </ul>
            </div>
            <div className='relevant-experience'>
                <ul>
                <li><h6>Relevant Experience</h6></li>
                    <li><strong>Software Engineering Immersive,</strong> Remote, General Assembly 2019 <br />
                    Full-time, full-stack, intensive software engineering program focused on modern front and back     
                    end technology, as well as computer science fundamentals.</li>
                </ul>
            </div>
            <div className='employment-history'>
                <ul>
                    <li><h6>Employment History</h6></li>
                    <li><strong>Recruiters of Minnesota</strong> - Remote 2018-2019 <br/>
                        Technical Recruiter</li>
                    <li><strong>The Nerdery</strong> - Bloomington, MN 2016-2018 <br/>
                        Talent Advocate</li>
                    <li><strong>The Creative Group</strong> - Minneapolis, MN 2014-2016 <br/>
                        Staffing Executive, promoted from Sr Recruiter, promoted from Creative Recruiter</li>
                </ul>
            <ul>
                <li><strong>Notable Responsibilities:</strong></li>
                <li>Collaborate with stakeholders to define requirements, priorities, and process for each role</li>
                <li>Research technical requirements in order to better determine qualifications of each candidate</li>
                <li>Streamline hiring process, increasing engagement from candidates and stakeholders</li>
                <li>Host and attend conferences and events as a representative of the organization</li>
            </ul>
            </div>
            <div className='education'>
                <ul>
                    <li><h6>Education</h6></li>
                    <li><strong>Software Engineering Immersive:</strong>General Assembly</li>
                    <li><strong>Intro to Programming:</strong>Coursera</li>
                    <li><strong>Bachelor of Arts - Advertising and Public Relations:</strong>The College of St. Scholastica </li>
                </ul>
            </div>
            <div className='volunteer'>
                <ul>
                    <li><h6>Volunteering</h6></li>
                    <li>Diversity Equity and Inclusion Initiative, The Nerdery</li>
                    <li>Open Sourcing Mental Illness</li>
                    <li>Latina Girls Code</li>
                </ul>
            </div>



        </div>
    )
}

export default Resume