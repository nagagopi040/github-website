import React, { Component } from "react";
import UserProfile from "./containers/user-profile";
import UserRepos from "./containers/user-repos";

import "./styles/main.css";

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="github-repos">
					<UserProfile />
					<UserRepos />
				</div>
			</div>
		);
	}
}