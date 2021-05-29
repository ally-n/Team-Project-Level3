import React, { Component } from "react"
// import "./RandomMeme.js"
// import "./PreviewMeme.js"
import "./MemeList"
import "./MemeForm.css"
import axios from "axios"

class MemeForm extends { Component } {
    constructor() {
        super()
        this.state = {
            id: "",
            url: "",
            topText: "",
            bottomText: "",
            memeList: []
        }
    }
    componentDidMount() {
        axios.get(`https://api.imgflip.com/get_memes`)
            .then((response) => {

                this.setState({
                    url: response.data.data.memes[0].url    //NOTE:  kelly started to edit url response.data part of this--
                })
            })
            .catch(error => console.log(error))
    }



    handleSubmit(e) {
        e.preventDefault()
        const newMeme = {
            memeURL: `${this.state.url}`,
            topText: `${this.state.topText}`,
            bottomText: `${this.state.bottomText}`
        }
        this.setState(prevState => ({
            memeURL: "",
            topText: "",
            bottomText: "",
            memeArray: [...prevState.memeArray, newMeme]
        }
        ))
        document.getElementById("memeForm").reset()
    }
    handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    render() {
        //this whole part could be done through props in a separate component instead- but what would memeList look like?
        const memeList = this.state.memeArray.map((meme) => {
            return <MemePreview
                url={meme.url}
                topText={meme.topText}
                bottomText={meme.bottomText}
            /> //Meme Preview component would have the edit and delete buttons? Cancel button
        })
        return (
            <div>        //does it make it random or do we need to randomize it?
                <RandomMeme />
                <form onSubmit={this.handleSubmit} id="memeForm">
                    <input onChange={this.handleChange}
                        type="text"
                        value={this.state.topText}
                        name="topText"
                        placeholder="Words displayed on top"
                    />
                    <input onChange={this.handleChange}
                        type="text"
                        value={this.state.bottomText}
                        name="bottomText"
                        placeholder="Words displayed on bottom"
                    />
                    <button onClick={this.handleSubmit}>Add Meme to List</button>
                </form>
                <PreviewMeme />
                { memeList}      {/*I know this probably has to be different since it needs edit and delete buttons */}
            </div >
        )
    }
}
export default MemeForm