import React, { Component } from 'react'

export class RepoHeader extends Component {
    render() {
        return (
            <div className="repo-header">
                <a href="#">Overview</a>
                <a href="#" className="active">Repositories(12)</a>
                <a href="#">Stars(6)</a>
                <a href="#" className="mobile-hide">Followers(2)</a>
                <a href="#" className="mobile-hide">Following(2)</a>
            </div>
        )
    }
}
