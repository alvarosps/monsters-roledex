import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({monsters: users}));
	}

	handleChange =  (e) => {
		this.setState({ searchField: e.target.value });
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));
		
		return (
			<div className="App">
				<header className="App-header">
				<h1>Monsters Roledex</h1>
				<SearchBox 
					placeholder='Search Monsters'
					handleChange={this.handleChange}
				/>
				<CardList monsters={filteredMonsters} />
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
				Learn React
				</a>
				</header>
			</div>
		);
	}
}

export default App;
