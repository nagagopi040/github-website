import React, { Component } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";

import { getUserInfo } from "./../actions";

import "./../styles/user-profile.css";
import locationSvg from "./../assets/location.svg";
import companySvg from "./../assets/organization.svg";
import emailSvg from "./../assets/email.svg";

class UserProfile extends Component {    
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
				<div className="user-info">
					<img className="user-avatar" src={avatar_url} alt="" />
					<div className="user-bio">
						<h2>{name}</h2>
						<h3>{login}</h3>
						<p>{bio}</p>
						<button className="edit-button" >Edit Profile</button>
					</div>
				</div>
				<div className="user-carrer">
					{company && <p><span dangerouslySetInnerHTML={{__html: companySvg}} />{company}</p>}
					{location && <p><span dangerouslySetInnerHTML={{__html: locationSvg}} />{location}</p>}
					{email && <p><span dangerouslySetInnerHTML={{__html: emailSvg}} />{email}</p>}
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