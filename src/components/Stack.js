import React, { useEffect, useState } from "react"
import styled from "styled-components"

const StackContainer = styled.div`
    display: flex;
    & > div {
        margin: 20px;
    }
`
const Stack = ({ currentClick }) => {
    // const [code, setCode] = useState("JavaScript")
    const [link, setLink] = useState("https://hissing-elderberry-bbc.notion.site/javascript-f6f7ffe4ac2a498eaa455e60fcfb76dd")
    useEffect(() => {
        if (currentClick === "Javascript") {
            // setCode("")
            setLink("https://hissing-elderberry-bbc.notion.site/javascript-f6f7ffe4ac2a498eaa455e60fcfb76dd")
        } else if (currentClick === "Reactjs") {
            // setCode("")
            setLink("https://hissing-elderberry-bbc.notion.site/React-5559294511cd4fef97562f213f88ffb6")
        } else if (currentClick === "ReactNative") {
            // setCode("")
            setLink("https://hissing-elderberry-bbc.notion.site/react-native-5684513526d74fc58d03976e440ab8cd")
        } else if (currentClick === "HTML/CSS") {
            // setCode("")
            setLink("https://hissing-elderberry-bbc.notion.site/html-css-ee147e8d2d104e3aa4801a61da5e739f")
        }
    }, [currentClick])

    return (
        <StackContainer className="container">
            <div>{currentClick}</div>
            <div>
                <a href={link} target="blank">
                    {currentClick}에 관하여
                </a>
            </div>
        </StackContainer>
    )
}
export default Stack
