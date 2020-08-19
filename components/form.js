import React, { Component } from 'react'

class form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comments : '',
             topic : ''
        }
    }
    
    handleChange = (event) =>{
        this.setState({
            username : event.target.value
        })
    }
    handleCommentChange = (event) =>{
        this.setState({
            comments : event.target.value
        })
    }
    handleTopicChange = (event)=>{
        this.setState({
            topic : event.target.value
        })
    }
    onsubmit = (event)=>{
        alert(`${this.state.username}  ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
        this.setState({
            topic : event.target.value

        })
    }
       

    render() {
        return (
            <form onSubmit={this.onsubmit}>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange ={this.handleChange}/>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value='React'>React</option>
                    <option value='Angular'>Angular</option>
                    <option value='Vue'>Vue</option>
                </select>
                <button type="submit">Submit</button>
            </div>
            </form>
        )
    }
}

export default form
