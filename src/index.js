import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBvcOQaL06BaTDLLh1wwj95196DRZtL1pk';

//<SearchBar /> => Creating Instance of SearcBar

// Create a new component. This component should produce some HTML
const App = () => {
	return (
		<div>
			<SearchBar /> 
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));


// Take this component's generated HTML and put it on the page (in the DOM)