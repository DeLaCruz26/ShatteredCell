import React, { Component } from 'react'
import UserDetails from './UserDetails'
import Appointment from './Appointment'
import Confirm from './Confirm'

export default class Form extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        repair: '',
        date: '',
        time: '',
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => event => {
        this.setState({
            [input]: event.target.value
        })
    }

    render() {
        const { step } = this.state
        const { firstName, lastName, phone, email, repair, date, time } = this.state
        const values = { firstName, lastName, phone, email, repair, date, time }

        switch (step) {
            case 1:
                return (
                    <UserDetails 
                        nextStep={this.nextStep} 
                        handleChange={this.handleChange} 
                        values={values} 
                    />
                )
            case 2:
                return (
                    <Appointment 
                        nextStep={this.nextStep} 
                        prevStep={this.prevStep} 
                        handleChange={this.handleChange} 
                        values={values} 
                    />
                )
            case 3:
                return (
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values} 
                    />
                )
            default:
                break;
        }
    }
}
