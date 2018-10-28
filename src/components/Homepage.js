import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Homepage extends Component {
    handleSignup = () =>{
        this.props.history.push("/register");
    }

    handleLogin = () => {
        this.props.history.push("/login");
    }
    render() {
        const {classes} = this.props;
        return (
            <div className="homepage-container">
                <div className="logo">This is a logo</div>
                <Button variant="outlined"  onClick={this.handleSignup} color="secondary" className={classes.button}>Sign up</Button>
                <Button variant="outlined" onClick={this.handleLogin} color="primary" className={classes.button}>Login</Button>
            </div>
        )
    }
}

Homepage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Homepage);
