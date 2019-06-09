import React, { Component } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";

import { getUserInfo } from "./../actions";

import "./../styles/user-profile.css";

class UserProfile extends Component {
	constructor(props){
		super(props);

		this.state = {

		}
    }
    
    componentDidMount(){
        fetch("https://api.github.com/users/supreetsingh247")
            .then(res => res.json())
            .then(response => this.props.getUserInfo(response))
            .catch(err => console.log(err));
    }
	
	render() {
		const { avatar_url, login, name, bio, company, location, email } = this.props.userData;
		return (
			<div className="user-profile">
				<img className="user-avatar" src={avatar_url} alt="" />
				<div className="user-bio">
					<h2 className="">{name}</h2>
					<h3>{login}</h3>
					<p>{bio}</p>
					<button className="edit-button" >Edit Profile</button>
				</div>
				<div className="user-carrer">
					<p>{company}</p>
					<p>{location}</p>
					<p>{email}</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	userData : state.userReducers.userData
})

const mapDispatchToProps = dispatch => ({
	getUserInfo: bindActionCreators(getUserInfo, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)