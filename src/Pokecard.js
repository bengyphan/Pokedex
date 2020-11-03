import './Pokecard.css';
export default function Pokecard({ pokedex }) {
	return pokedex.map(pokemon => (
		<div className="Pokecard">
			<div className="Pokecard-card">
				<h3 className="Pokecard-name">{pokemon.name}</h3>
				<img
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
				></img>
				<p>Type: {pokemon.type}</p>
				<p>EXP: {pokemon.base_experience}</p>
			</div>
		</div>
	));
}
