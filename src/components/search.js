import React, {Component} from 'react';

class SearchBar extends Component{
    
    constructor(props) {
        super(props);
        
        this.state = { searchText : '' };
        this.onSearch = props.onSearch;
    }
    
    render() {
        return <input 
                value = { this.state.searchText }
                onChange ={ e => this.onInputChange(e.target.value) } />;
    }
    
    onInputChange(searchText){
        this.setState({searchText});
        this.onSearch(searchText);
    }
}

export default SearchBar;