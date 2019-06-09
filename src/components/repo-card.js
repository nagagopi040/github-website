import React, { Component } from 'react'
import { Common } from '../utils';
import licenseSvg from "./../assets/license.svg"

export class RepoCard extends Component {
    render() {
        const { name, description, language, updated_at, license, fork, homepage, } = this.props;
        return (
            <div className="repo-card">
                <h3><a className="repo-link" href="javascript:void(0)">{name}</a></h3>
                {fork && <p className="repo-forked">Forked from {homepage}</p>}
                {description && <p className="repo-description">{description}</p>}
                <div className="repo-tech">
                    {language && <p><span className={`repo-languageIcon repo-${language}`} />{language}</p>}
                    {license && <p><span dangerouslySetInnerHTML={{__html: licenseSvg}} />{license.spdx_id}</p>}
                    <p className="upadted-date">Updated {Common.getUpdatedDate(updated_at)}</p>
                </div>
            </div>
        )
    }
}
