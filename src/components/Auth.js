import React, { useEffect, useState } from "react"
import { authService } from "fbase"
import AuthForm from "components/AuthForm"
import Navigation from "components/Navigation"

const Auth = () => {
    const [userCheck, setUserCheck] = useState(false)
    const [userObj, setUserObj] = useState("")
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setUserCheck(true)
                setUserObj(user)
            } else {
                setUserCheck(false)
                setUserObj(user)
            }
        })
    }, [])

    return <div className="authContainer">{userCheck ? <Navigation userObj={userObj} /> : <AuthForm />}</div>
}
export default Auth
