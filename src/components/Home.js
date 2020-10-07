import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ProjectButton from './ProjectButton';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>These are just some react practice projects</h1>
                <div className="projects-container">
                <div className="projectDisplay">
                        <ProjectButton  
                            img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                            label="Pokémon"
                            to="/pokemon"
                        />
                        <p>Cosuming Data from an API</p>
                        <p>Using Lazy-load to deal with images</p>
                        <p>Handling events</p>
                    </div>
                    <div className="projectDisplay">
                        <ProjectButton  
                            img="/checklist.png"
                            label="Checklist"
                            to="/checklist"
                        />
                        <p>Storing data on the browser</p>
                        <p>Displaying item with animation</p>
                        <p>Handling events</p>
                    </div>
                    
                </div>
            </>
        )
    }
}
