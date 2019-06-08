import React, { Component } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";

import { getUserInfo, getUserRepos } from "./actions";

class App extends Component {  
	render() {
		return (
			<div>
				Welcome to Github
			</div>
		);
	}
}

const mapStateToProps = state => ({
	userData : state.userReducers.userData,
	repos: state.userReducers.repos
})

const mapDispatchToProps = dispatch => ({
	getUserInfo: bindActionCreators(getUserInfo, dispatch),
	getUserRepos: bindActionCreators(getUserRepos, dispatch)
});

export default App = connect(mapStateToProps, mapDispatchToProps)(App)