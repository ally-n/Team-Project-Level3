import React, { Component } from "react"
import RandomMeme from "./RandomMeme.js"
import PreviewMeme from "./PreviewMeme.js"
import "./MemeForm.css"
import axios from "axios"

class MemeForm extends Component {
    constructor() {
        super()
        this.state = {
            id: "",
            url: "",
            topText: "",
            bottomText: "",
            memeArray: []
        }
    }
    componentDidMount() {
        axios.get(`https://api.imgflip.com/get_memes`)
            .then((response) => {
                console.log(response.data)
                const memesApi = response.data
                console.log(`GET MEMES LIST`, memesApi)
                this.setState({
                    url: response.data.data.memes[0].url
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

        const memeList = this.state.memeArray.map((meme, index) =>
            <PreviewMeme
                key={meme.index}
                id={index}
                url={meme.url}
                topText={meme.topText}
                bottomText={meme.bottomText}
            />
        )


        return (
            <div>
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
                { memeList}
            </div >
        )
    }
}
export default MemeForm
