import React from 'react';
import './Pokecard.css';

const POKE_API =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export default function Pokecard(props) {
	let imgSrc = `${POKE_API}${props.id}.png`;
	return (
		<div className="Pokecard">
			<div className="Pokecard-card">
				<h3 className="Pokecard-name">{props.name}</h3>
				<img src={imgSrc} alt={props.name}></img>
				<p>Type: {props.type}</p>
				<p>EXP: {props.base_experience}</p>
			</div>
		</div>
	);
}
