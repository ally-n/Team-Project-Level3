import React from "react"
import "./PreviewMeme.css"

function PreviewMeme(props) {
    console.log(props)
    return (
        <div>
            <img width="250px" height="250px" src={props.url} alt="meme-photo" />
            <h3>{props.bottomText}</h3>
            <button>Change Meme Image</button>
        </div>
    )
}

export default PreviewMeme