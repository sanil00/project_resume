import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Auth from "components/Auth"
import Home from "routes/Home"
import Ability from "routes/Ability"
import Project from "routes/Project"

const AppRouter = ({ refreshUser, userObj }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home userObj={userObj} refreshUser={refreshUser} />
                </Route>
                <Route exact path="/ability">
                    <Ability userObj={userObj} refreshUser={refreshUser} />
                </Route>
                <Route exact path="/project">
                    <Project userObj={userObj} refreshUser={refreshUser} />
                </Route>
            </Switch>
        </Router>
    )
}
export default AppRouter
