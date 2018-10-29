import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    button: {
        margin: theme.spacing.unit,
      },
    // menu: {
    //   width: 200,
    // },
});

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleSubmit = () => {
        // redirect to dashboard
        this.props.history.push("/dashboard");
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="register-container">
                 <div className="register-title">Create Your Account</div>
                 <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}> 
                 <TextField
                    id="name-input"
                    label="Username"
                    className={classes.textField}
                    // value={this.state.username}
                    // onChange={this.handleNameInput('username')}
                    margin="normal"
                    variant="outlined"
                    required={true}
                />
                 <TextField
                    id="email-input"
                    label="Email Address"
                    className={classes.textField}
                    type="email"
                    name="email"
                    margin="normal"
                    variant="outlined"
                    required={true}
                    // value={this.state.email}
                    // onChange={this.handleEmailInput('email')}
                    // error={this.state.emailError}
                />
                <TextField
                    id="password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    margin="normal"
                    variant="outlined"
                    required={true}
                    // value={this.state.password}
                    // onChange={this.handlePasswordInput('password')}
                    // error={this.state.passwordError}
                />
                <TextField
                    id="confirm-password-input"
                    label="Confirm Password"
                    className={classes.textField}
                    type="password"
                    margin="normal"
                    variant="outlined"
                    required={true}
                    // value={this.state.confirmPassword}
                    // onChange={this.handlePasswordConfirm('confirmPassword')}
                    // error={this.state.confirmPasswordError}
                />
                 <Button type="submit" variant="contained" color="primary" className={classes.button}>
                    Sign up
                </Button>
                </form>
            </div>
        );
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Register);


