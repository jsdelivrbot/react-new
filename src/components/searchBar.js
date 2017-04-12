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
			<div className="search-bar">
				<input 
					onChange={(e) => this.onInputChange(e.target.value)}
					value={this.state.term}
				/>
			</div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}

export default SearchBar;