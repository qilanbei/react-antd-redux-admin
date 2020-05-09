import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Layout from '@/views/Layout/index'
import Login from '@/views/Login/Index'
import AuthRouter from '@/views/auth/AuthRouter'

const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route component={Login} exact path="/login" />
                <AuthRouter path="/" component={Layout} />
            </Switch>
        </HashRouter>
    )
}
export default Router
