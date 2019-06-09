import React, { Component } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";

import { getUserRepos } from "./../actions";
import "./../styles/user-repos.css";
import { Filter, RepoCard, RepoHeader } from "../components";
import { Common } from "../utils";

class UserRepos extends Component {
	constructor(props){
		super(props);

		this.state = {
			languages: [],
			type: "",
			language: "",
			searchText: ""
		}
    }
    
    componentDidMount(){
		const { language, type, searchText } = this.state;
    	Common.getRepos(searchText, type, language).then(repos => {
			this.props.getUserRepos(repos);
			let languages = Common.getLanguages(repos);
			this.setState({languages});
		})
	}
	
	onLanguageClick = (value) => {
		const { searchText, type } = this.state;
		this.setState({language: value});
		Common.getRepos(searchText, type, value).then(repos => this.props.getUserRepos(repos))
	}

	onTypeClick = (value) => {
		const { searchText, language } = this.state;
		this.setState({type: value});
		Common.getRepos(searchText, value, language).then(repos => this.props.getUserRepos(repos))
	}

	onSearch = (value) => {
		const { type, language } = this.state;
		this.setState({searchText: value});
		Common.getRepos(value, type, language).then(repos => this.props.getUserRepos(repos))
	}
	
	render() {
		const { repos } = this.props;
		const { searchText, type, language } = this.state;
		return (
			<div className="user-repos">
				<RepoHeader />
                <Filter languages={this.state.languages} onSearch={this.onSearch} onLanguageClick={this.onLanguageClick} onTypeClick={this.onTypeClick}/>
				{(searchText || type || language) &&
					<div>
						<span>{repos.length}</span> results for
						<span> {type} </span> repositories 
						{searchText && <span> matching {searchText}</span>}
						{language && <span> written in {language}</span>}
					</div>
				}
				{
                    repos.length > 0 && repos.map( repo => {
                        return <RepoCard {...repo} key={repo.id}/>
                    })
                }
			</div>
		);
	}
}

const mapStateToProps = state => ({
	repos : state.userReducers.repos
})

const mapDispatchToProps = dispatch => ({
	getUserRepos: bindActionCreators(getUserRepos, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRepos)