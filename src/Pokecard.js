export default function Pokecard({ pokedex }) {
	return pokedex.map(pokemon => (
		<div className="Pokecard">
			<h3 className="Pokecard-name">{pokemon.name}</h3>
		</div>
	));
}
