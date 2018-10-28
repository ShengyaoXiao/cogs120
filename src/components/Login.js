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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleSubmit = () => {
        // redirect to homepage 
        this.props.history.push("/");
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="login-container">
                 <div className="login-title">Login</div>
                 <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}> 
                 <TextField
                    id="name-input"
                    label="Username or Email Address"
                    className={classes.textField}
                    // value={this.state.username}
                    // onChange={this.handleNameInput('username')}
                    margin="normal"
                    variant="outlined"
                    required={true}
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
                 <Button type="submit" variant="contained" color="primary" className={classes.button}>
                    Login 
                </Button>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Login);


