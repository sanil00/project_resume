import React from "react"
import { Link, useHistory } from "react-router-dom"
import { authService } from "fbase"
import styled from "styled-components"

const Profile = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
`

const Navigation = ({ userObj }) => {
    const history = useHistory()
    const onLogOutClick = () => {
        authService.signOut()
        history.push("/")
    }
    console.log(userObj)
    return (
        <nav>
            <Profile>{userObj.displayName ?? ""}의 profile</Profile>
            <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
                <li>
                    <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
                        Log Out
                    </span>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation
