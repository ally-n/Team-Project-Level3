import React from "react"
import "./MemeForm"
import "./RandomMeme"
import "./MemeList.css"

function MemeList(props) {
    console.log(props)
    return (
        <div>
            <h3>props.topText</h3>
            <RandomMeme />                   {/*can we RandomMeme this way?? and use it also to Preview Meme instead of separate component??*/}
            <h3>props.bottomText</h3>
            <button>Edit Button</button>     {/*NOTE:  probably needs to toggle between Edit & Cancel Edit */}
        </div>
    )
}


export default MemeList