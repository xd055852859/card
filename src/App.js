import React, { Component } from 'react';
import {HashRouter,Route,Link} from'react-router-dom'

import Me from './components/Me';
import CardHolder from './components/CardHolder';
import CardGroup from './components/CardGroup';
import Order from './components/Order';
import './App.css';
class App extends Component {
    render() {
        return(
            <HashRouter>
                <div>
                    <Route path="/me" component={Me}/>
                    <Route path="/cardHolder" component={CardHolder}/>
                    <Route path="/cardGroup" component={CardGroup}/>
                    <Route path="/order" component={Order}/>
                    <div className="footer">
                        <Link to="me" className="me">我</Link>
                        <Link to="cardHolder">名片夹</Link>
                        <Link to="cardGroup">群名片</Link>
                        <Link to="order">订单</Link>                      
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;