import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LazyLoad from 'react-lazy-load';

export default class PkmDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            id: ""
        }
    }

    componentWillMount() {
        const {pkmName, pkmID} = this.props;

        this.setState({
            name: pkmName,
            id: pkmID
        });
    }

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    render() {
        return (
            <div className="list-item">
                <div className="container">
                    <p>
                        <div className="pkmImageDisplay">
                            <LazyLoad height={90}>
                                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.state.id+".png"} />
                            </LazyLoad>
                        </div>
                        <span className="not-cut">{this.state.id} - {this.capitalize(this.state.name)}</span>
                        <FontAwesomeIcon icon="paw" className="icon" />
                    </p>
                </div>
            </div>
        )
    }
}
