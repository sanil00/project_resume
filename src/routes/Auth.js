import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons"
import { authService, firebaseInstance } from "fbase"
import AuthForm from "components/AuthForm"
import Home from "./Home"
import Navigation from "components/Navigation"

const Auth = () => {
    const [userCheck, setUserCheck] = useState(false)

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setUserCheck(true)
            } else {
                setUserCheck(false)
            }
        })
    }, [])

    return (
        <div className="authContainer">
            <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="3x" style={{ marginBottom: 30 }} />
            {userCheck ? <Navigation /> : <AuthForm />}
        </div>
    )
}
export default Auth
