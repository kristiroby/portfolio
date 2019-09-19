import React from 'react';
import Movie from '../images/movie.png';
import Stable from '../images/stable.png';
import { Link } from 'react-router-dom';

class Work extends React.Component {
    state = {
        projects: [
            {
                name: "Movie List",
                image: {Movie},
                summary: "App built with html, css, jQuery, AJAX and the movieDB API",
                link: "https://kristiroby.github.io/movie-app/"
            },
            {
                name: "Stable Genius",
                image: {Stable},
                summary: "App built using HTML, CSS, Javascript, Node.js, Mongoose, Express and EJS.",
                link: "https://stable-genius.herokuapp.com/"
            }
        ]
    }
    render() {
        return (this.state.projects.map(project => {
            return (
                <div className='card' key={project.id}>
                    <div className="card-image">
                        <img src={project.image} alt="Screenshot of  app" width="90px" height="auto"></img>
                        <span className="card-title">{project.name}</span>
                    </div>
                    <div className="card-content"> 
                        <p>{project.summary}</p>
                    </div>
                    <div className="card-action">
                        <Link to={project.link}>View App</Link>
                    </div>
                </div>
            )
        }))
    }
}

export default Work