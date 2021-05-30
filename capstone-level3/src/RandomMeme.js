import React from "react"


function RandomMeme(props) {
    console.log(props)
    return (
        <div>
            <img width="250px" height="250px" src={props.url} alt="meme" />
        </div>
    )
}

export default RandomMeme

