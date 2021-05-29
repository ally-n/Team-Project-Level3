import React from "react"
import "./PreviewMeme.css"

function PreviewMeme(props) {
    console.log(props)
    return (
        <div>
            <image>{props.url}</image>
            <h3>{props.bottomText}</h3>
            <button>Change Meme Image</button>        {/*NOTE:  maybe? needs to toggle between Change & Cancel Change Image?? */}
        </div>
    )
}

export default PreviewMeme