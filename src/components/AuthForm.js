import React, { useState } from "react"
import { authService, firebaseInstance } from "fbase"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons"

const inputStyles = {}

const AuthForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("")
    const onChange = (event) => {
        const {
            target: { name, value },
        } = event
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            let data
            data = await authService.signInWithEmailAndPassword(email, password)
        } catch (error) {
            setError(error.message)
        }
    }
    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event
        let provider
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider()
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider()
        }
        await authService.signInWithPopup(provider)
    }
    return (
        <>
            <form onSubmit={onSubmit} className="container">
                <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange} className="authInput" />
                <input name="password" type="password" placeholder="Password" required value={password} className="authInput" onChange={onChange} />
                <input type="submit" className="authInput authSubmit" value={"Sign In"} />
                {error && <span className="authError">{error}</span>}
            </form>
            <div className="authBtns">
                <button onClick={onSocialClick} name="google" className="authBtn">
                    Continue with Google <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button onClick={onSocialClick} name="github" className="authBtn">
                    Continue with Github <FontAwesomeIcon icon={faGithub} />
                </button>
            </div>
        </>
    )
}
export default AuthForm
