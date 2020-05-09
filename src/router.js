import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import App from './App';

export default class Routers extends React.Component{
    render () {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={App} />
                </Switch>
            </Router>
        )
    }
}
