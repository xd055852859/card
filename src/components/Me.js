import React from 'react';
import './Me.css';

import ScanSrc from './../images/scanIcon.png'
import CodeSrc from './../images/codeIcon.png'
import MsgSrc from './../images/msgIcon.png'
import SetSrc from './../images/set.png'
class Me extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="headerIcon">
                    <img src={ScanSrc}></img>
                    <div>扫描</div>
                </div>
                <div className="headerIcon">
                    <img src={CodeSrc}></img>
                    <div>二维码</div>
                </div>

                <div className="headerIcon">
                    <img src={MsgSrc}></img>
                    <div>消息</div>
                </div>

                <div className="headerIcon">
                    <img src={SetSrc}></img>
                    <div>设置</div>
                </div>
            </div>
        )
    }
}

export default Me;