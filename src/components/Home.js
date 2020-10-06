import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/pokemon" >Pokemon</Link><br /><br />
                <Link to="/checklist" >Checklist</Link>
            </div>
        )
    }
}
