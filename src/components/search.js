import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        
        this.state = { searchText : '' };
    }
    
    render() {
        return <input 
                value = { this.state.searchText }
                onChange ={ e => this.setState( { searchText : e.target.value } ) } />;
    }
}

export default SearchBar;