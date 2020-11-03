import './App.css';
import { pokedex } from './Pokedex';
import Pokecard from './Pokecard';

function App() {
	return (
		<div className="Pokedex">
			<h1 className="Pokedex-title">Pokedex</h1>
			<Pokecard pokedex={pokedex} />
		</div>
	);
}

export default App;
