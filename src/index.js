import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search';
import VideoList from './components/videoThumbList';
import VideoPlayer from './components/videoPlayer';

const API_KEY = 'AIzaSyAENE0tRdB0EpOShYYR1bkVAcrUEIJLn58';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            videos : [],
            selectedVideo : null
        };
        
        this.searchTube('cats');
    }
    
    searchTube(searchText){
        YTsearch({ key : API_KEY, term : searchText }, videos => {
            this.setState({
                videos : videos,
                selectedVideo : videos[0],
            });
        });
    }
    
    render() {
        const throttle = _.debounce( searchText => this.searchTube(searchText) , 350 );
        
        return (
            <div>
                <SearchBar onSearch={ throttle } />
                <VideoPlayer video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect = { selectedVideo => {
                        this.setState({selectedVideo});
                    }}
                    videos={ this.state.videos 
                    }/>
            </div>
        );
    }
}

ReactDom.render(<App></App>, document.querySelector('.container'));