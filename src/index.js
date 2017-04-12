import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/videoList';

const API_KEY = 'AIzaSyBvcOQaL06BaTDLLh1wwj95196DRZtL1pk';

//<SearchBar /> => Creating Instance of SearcBar

// Create a new component. This component should produce some HTML
class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		/*
		* Fetching The API Data EndPoints
		*/
		// YTSearch({ key: API_KEY, term: 'naezy' }, (data) => {
		// 	//console.log(data); // This is where we can update our STATE
		// 	this.setState({
		// 		videos: data
		// 	});
		// });

		/*
		* So now whenever the App got instanttiate, our constructor will run and will kick off the YTSearch with the results `naezy`
		*/

		/*
		* USing some ES6 syntactic sugar, we can use
		*/

		this.videoSearch('naezy');
	}

	videoSearch(term){
		YTSearch({ key: API_KEY, term: term }, (videos) => {
			//console.log(videos); // This is where we can update our STATE
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			}); // ES6 will read as this.setState({ videos:  videos})
		});
	}

	render(){
		return (
			<div>
				<SearchBar onSearchTermChange={(term) => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo }/>
				<VideoList 
					videos={this.state.videos} 
					onVideoSelect = {(selectedVideo) => this.setState({ selectedVideo: selectedVideo })}
				/>

			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));


// Take this component's generated HTML and put it on the page (in the DOM)

/*
* <VideoList videos={this.state.videos} /> => passing data like this is like passing props in REACT. The data we are passing from App to VideoList is refer to as props. So `videos` is a props
*/

/* videoList.js
* In const VideoList = (props) => props is something that are passed from App, 
* {props.videos.length} => we want to check videos array length using props.
* props = {
	videos: [{},{},{}],
	abc: {
		.....
	}
}
*/