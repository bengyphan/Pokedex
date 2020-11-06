import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

function Pokedex(props) {
	let winnerMessage = null;
	if (props.isWinner) {
		winnerMessage = <p className="winMessage">This hand wins!!!</p>;
	}
	return (
		<div className="Pokedex">
			<h1 className="Pokedex-title">Pokedex</h1>
			{props.pokemon.map(p => (
				<Pokecard
					id={p.id}
					name={p.name}
					type={p.type}
					base_experience={p.base_experience}
				/>
			))}
			<h4>Total experience: {props.exp}</h4>
			{winnerMessage}
		</div>
	);
}

export default Pokedex;
