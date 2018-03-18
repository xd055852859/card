import React, {Component} from 'react';
import {HashRouter, Route, Link} from 'react-router-dom'

import Me from './contants/me/Me';
import CardHolder from './contants/cardHolder/CardHolder';
import CardGroup from './contants/cardGroup/CardGroup';
import Order from './contants/Order';
import './App.css';

import meSrc from './images/me-default.png'
import cardHolderSrc from './images/card-default.png'
import CardGroupSrc from './images/group-default.png'
import OrderSrc from './images/order-default.png'
class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div className="header">可信名片</div>
                    <Route path="/me" component={Me}/>
                    <Route path="/cardHolder" component={CardHolder}/>
                    <Route path="/cardGroup" component={CardGroup}/>
                    <Route path="/order" component={Order}/>
                    <div className="footer">
                        <Link to="me" className="cardIconStyle">
                            <img src={meSrc}></img>
                            <div className="fontIconStyle">我</div>
                        </Link>
                        <Link to="cardHolder" className="cardIconStyle">
                            <img src={cardHolderSrc}></img>
                            <div className="fontIconStyle">名片夹</div>
                        </Link>
                        <Link to="cardGroup" className="cardIconStyle">
                            <img src={CardGroupSrc}></img>
                            <div className="fontIconStyle">群名片</div>
                        </Link>
                        <Link to="order" className="cardIconStyle">
                            <img src={OrderSrc}></img>
                            <div className="fontIconStyle">订单</div>
                        </Link>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;