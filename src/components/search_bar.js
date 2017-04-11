import React, { Component } from 'react';
// const Component = React.Component;

/*
* Functional Components
*/
// const SearchBar = () => {
// 	return <input />;
// };

/*
* Class Based Components
*/
class SearchBar extends Component {
	constructor(props){ // COntsructor is always called whenever a Class is instantiated
		super(props);

		this.state = {
			term: ''
		};
	}

	render(){
		return(
			<div>
				<input 
					onChange={(e) => this.setState({term: e.target.value})}
					value={this.state.term}
				/>
			</div>
		);
	}

}

export default SearchBar;