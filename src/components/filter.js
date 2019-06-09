import React, { Component } from 'react'
import { DropDown } from './drop-down';
import { Common } from '../utils';

export class Filter extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchText: "",
            types: []
        }
    }

    componentDidMount(){
        var types = Common.types;
        this.setState({
            types
        })
    }

    onChange = (event) => {
        this.setState({
            searchText: event.target.value
        }, (event) => this.props.onSearch(this.state.searchText))
    }

    render() {
        const { languages, onLanguageClick, onTypeClick } = this.props;
        return (
            <div className="repo-filter">
                <input className="filter-search" type="text" placeholder="Find a repository..." value={this.state.searchText} onChange={this.onChange} />
                <div className="filter-buttons">
                    <DropDown items={this.state.types} label="Type" onItemClick={(value) => onTypeClick(value)} />
                    <DropDown items={languages} label="Language" onItemClick={(value) => onLanguageClick(value)} />
                    <button className="new-button">New</button>
                </div>
            </div>
        )
    }
}
