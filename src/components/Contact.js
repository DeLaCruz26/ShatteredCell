import React, { Component } from 'react'
import '../App.css'

export default class Contact extends Component {
    state = {
        name: '',
        number: null,
        question: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            name: '',
            number: null,
            question: ''
        })
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <h1>Contact Shattered Cell</h1>
                    <div className='contact'>
                        <p>864-553-8759</p>
                    </div>
                </div>
                <div>
                    <h3>Have any questions?</h3>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <label> Name
                            <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
                        </label>
                        <label>Number
                            <input type='number' name='number' value={this.state.number} onChange={this.handleChange} />
                        </label>
                        <label>Question
                            <input type='description' name='question' value={this.state.question} onChange={this.handleChange} />
                        </label>
                        <input type='submit' value='Submit' />
                    </form>
                </div>
            </div>
        )
    }
}
