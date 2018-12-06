import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

// import "./svg.less";
const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 5,
  },
  input: {
    display: 'none',
  },
  primary: {
    fontSize:"18px",
    color:"#fff",
    backgroundColor: "#FF6B6B",
    '&:hover': {
      backgroundColor: "#E86262",
    },
  },
  secondary: {
    fontSize:"18px",
    color:"#fff",
    backgroundColor: "#4ECDC4",
    '&:hover': {
      backgroundColor: "#47BBB3",
    },
  }
}
);

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
                <div className="logo"> Monster Fighter </div>
                <Button variant="contained" onClick={this.handleSignup}  className={classNames(classes.button, classes.primary)}>Sign up</Button>
                <Button variant="contained" onClick={this.handleLogin}  className={classNames(classes.button, classes.secondary)}>Login</Button>
            </div>
        );
    }
}

Homepage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Homepage);
