import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search';
import VideoList from './components/videoThumbList';

const API_KEY = 'AIzaSyAENE0tRdB0EpOShYYR1bkVAcrUEIJLn58';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {videos : []};
        YTsearch({ key : API_KEY, term : 'cats' }, videos => {
            this.setState({videos});
        });
    }
    
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={ this.state.videos }/>
            </div>
        );
    }
}

ReactDom.render(<App></App>, document.querySelector('.container'));