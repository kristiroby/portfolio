import React from 'react';
import Movie from '../images/movie.png';
import Stable from '../images/stable.png';
import { Link } from 'react-router-dom';

class Work extends React.Component {
    state = {
        projects: [
            {
                name: "Movie List",
                image: Movie,
                summary: "App built with html, css, jQuery, AJAX and the movieDB API",
                link: "https://kristiroby.github.io/movie-app/"
            },
            {
                name: "Stable Genius",
                image: Stable,
                summary: "App built using HTML, CSS, Javascript, Node.js, Mongoose, Express and EJS.",
                link: "https://stable-genius.herokuapp.com/"
            }
        ]
    }
    render() {
        return (this.state.projects.map(project => {
            return (
                <div className='work-container'>
                <div className='project card grey darken-3' key={project.id}>
                    <div className="card-image">
                        <img className="responsive-img"src={project.image} alt="Screenshot of app"></img>
                    </div>
                        <span className="card-title white-text">{project.name}</span>
                    <div className="card-content white-text"> 
                        <p>{project.summary}</p>
                    </div>
                    <div className="card-action">
                        <a href={project.link} className="link teal-text">View App</a>
                    </div>
                </div>
                </div>
            )
        }))
    }
}

export default Work