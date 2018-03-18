import React from 'react'

import './Avatar.css'

class Avatar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="avatar-container">
                <div className="avatar-div">
                    <img src={this.props.avatar.src} alt="this.props.avatar.src" className="avatar-img"></img>
                </div>
                <div className="nickName-div">
                    <text>{this.props.nickName}</text>
                </div>
            </div>

        )
    }
}

export default Avatar;