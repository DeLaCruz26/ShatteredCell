import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
    floatingLabelFocusStyle: {
        color: 'black'
    }
}

class UserDetails extends Component {
    continue = event => {
        event.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { classes } = this.props
        const { values, handleChange } = this.props
        return (
                <>
                    <TextField 
                        label='First Name'
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        margin='normal'
                        InputLabelProps={{
                            className: classes.floatingLabelFocusStyle
                        }}
                        fullWidth
                    />
                    <TextField 
                        label='Last Name'
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        margin='normal'
                        InputLabelProps={{
                            className: classes.floatingLabelFocusStyle
                        }}
                        fullWidth
                    />
                    <TextField 
                        label='Email'
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        margin='normal'
                        InputLabelProps={{
                            className: classes.floatingLabelFocusStyle
                        }}
                        fullWidth
                    />
                    <br />
                    <br />
                    <Button
                        color='secondary'
                        variant='contained'
                        onClick={this.continue}
                        style={{backgroundColor: '#ba000d'}}
                    >Continue</Button>
                </>
        )
    }
}

UserDetails.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UserDetails)