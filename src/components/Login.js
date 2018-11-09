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
            username: '',
            password: '',
            status: false 
        };
    }

    componentWillMount() {
        if(localStorage.getItem('username') !== '') {
            this.setState({username: localStorage.getItem('username')});
        }
    }

    handleUsernameInput = name => event => {
        this.setState({username: event.target.value});
    }

    handlePasswordInput = email => event => {
        this.setState({password: event.target.value});
    }

    checkButtonStatus = () => {
        return (this.state.username === '') || (this.state.password === '');
    }

    handleSubmit = () => {
        // set localStorage 
        localStorage.setItem('username', this.state.username);
        // redirect to dashboard
        this.props.history.push("/dashboard");
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="login-container">
                 <div className="login-title" style={{textAlign: 'center'}}>Login</div>
                 <form className={classes.container} noValidate autoComplete="off" > 
                 <TextField
                    id="name-input"
                    label="Username"
                    className={classes.textField}
                    value={this.state.username}
                    margin="normal"
                    variant="outlined"
                    required={true}
                    onChange={this.handleUsernameInput('username')}
                />
            
                <TextField
                    id="password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    margin="normal"
                    variant="outlined"
                    required={true}
                    value={this.state.password}
                    // error={this.state.passwordError}
                    onChange={this.handlePasswordInput('password')}
                />
                 <Button disabled={this.checkButtonStatus()} type="button" variant="contained" color="primary" onClick={this.handleSubmit}className={classes.button}>
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


