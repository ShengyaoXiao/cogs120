import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItem: "center"
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItem: "center"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit*2,
        width: "300px"
    },
    dense: {
      marginTop: 16,
    },
    button: {
        margin: theme.spacing.unit,
        width: "300px",
        // fontSize: "16px"
      },
    confirm: {
        color:"#fff",
        backgroundColor: "#FFA06D",
        '&:hover': {
            backgroundColor: "#E89264",
        },
    },
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
            <div className={classes.root}>
                 <div className="login-title" style={{textAlign: 'center'}}>Login To Your Account</div>
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
                <div>
                 <Button disabled={this.checkButtonStatus()} type="button" variant="contained" onClick={this.handleSubmit} className={classNames(classes.button, classes.confirm)}>
                    Login 
                </Button>
                </div>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Login);


