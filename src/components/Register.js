import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      marginBottom: theme.spacing.unit*2,
      width: "300px",
    //   fontSize: "16px"
    },
    dense: {
      marginTop: 16,
    },
    button: {
        margin: theme.spacing.unit,
        fontSize: "16px"
      },
    confirm: {
        color:"#fff",
        backgroundColor: "#FFA06D",
    '&:hover': {
        backgroundColor: "#E89264",
    },
      },
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
                 <div className="register-title" style={{textAlign: 'center'}}>Create Your Account</div>
                 <form className={classes.container} noValidate autoComplete="off" > 
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
                 <Button type="button" variant="contained" className={classNames(classes.button, classes.confirm)} onClick={this.handleSubmit}>
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


