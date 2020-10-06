import React from 'react';
import BackButton from './BackButton';
import PkmDisplay from './PkmDisplay';

export default class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfPkms: 9,
            list: []
        };

        //Binding this to the method
        this.handleInput = this.handleInput.bind(this);
        this.requestPokemons = this.requestPokemons.bind(this);
        this.searchPokemons = this.searchPokemons.bind(this);
    }

    requestPokemons() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit="+this.state.numberOfPkms)
        .then(data => data.json())
        .then(data => this.setState({list: data.results.map(pkm => pkm.name)}))
    }

    componentWillMount() {
        this.requestPokemons();
    }

    handleInput(e) {
        this.setState({
            numberOfPkms: e.target.value
        });
    }

    searchPokemons(e) {
        e.preventDefault();
        if (this.state.numberOfPkms >= 1) {
            this.requestPokemons();
        }else {
            this.setState({
                list: []
            });
        }
        
    }

    render() {
        const listItems = this.state.list.map((name, index) => {
            return <PkmDisplay pkmID={index + 1} pkmName={name} />
        });

        return (
            <>
                <BackButton />

                <div className="pkmApp">
                    <header>
                        <form onSubmit={this.searchPokemons}>
                            <input type="number" value={this.state.numberOfPkms} onChange={this.handleInput} />
                            <button onClick={this.searchPokemons}>Search</button>
                        </form>
                    </header>
                
                    <div className="pkmAppContainer">
                        {listItems}
                    </div>
                </div>
            </>
        )
    }
}
