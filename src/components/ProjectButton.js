import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectButton(props) {
    return (
        <Link to={props.to} className="project-button">
            <img src={props.img} />
            <span>
                {props.label}
            </span>
        </Link>
    )
}
