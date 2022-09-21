import React, { useState } from "react"
import { authService, firebaseInstance } from "fbase"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

const SendForm = styled.form`
    display: flex;
    flex-direction: column;
`
const EmailInput = styled.input`
    justify-self: center;
    align-self: center;
    width: 80%;
    height: 20px;
    background-color: white;
    border-radius: 10px;
    padding-left: 10px;
`
const PasswordInput = styled.input`
    justify-self: center;
    align-self: center;
    width: 80%;
    height: 20px;
    background-color: white;
    border-radius: 10px;
    padding-left: 10px;
    margin: 10px 0;
`
const SubmitInput = styled.input`
    justify-self: center;
    align-self: center;
    text-align: center;
    cursor: pointer;
    width: 100px;
    height: 20px;
    border: 1px solid white;
    border-radius: 10px;
`
const AuthBtn = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 10px;
`
const GoogleBtn = styled.button`
    border-radius: 50px;
    width: 50px;
    height: 50px;
`
const GithubBtn = styled.button`
    border-radius: 50px;
    width: 50px;
    height: 50px;
`
const AuthError = styled.span``
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
            <SendForm onSubmit={onSubmit}>
                <EmailInput name="email" type="email" placeholder="Email" required value={email} onChange={onChange} />
                <PasswordInput name="password" type="password" placeholder="Password" required value={password} onChange={onChange} />
                <SubmitInput type="submit" value={"Sign In"} />
                {error && <AuthError>{error}</AuthError>}
            </SendForm>
            <AuthBtn>
                <GoogleBtn>
                    <FontAwesomeIcon
                        icon={faGoogle}
                        onClick={(event) => {
                            event.target.name = "google"
                            onSocialClick(event)
                        }}
                        name="abc"
                    />
                </GoogleBtn>
                <GithubBtn>
                    <FontAwesomeIcon
                        icon={faGithub}
                        onClick={(event) => {
                            event.target.name = "github"
                            onSocialClick(event)
                        }}
                    />
                </GithubBtn>
            </AuthBtn>
        </>
    )
}
export default AuthForm
