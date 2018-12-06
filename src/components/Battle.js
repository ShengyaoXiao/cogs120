import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import classNames from 'classnames';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
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
});

class Battle extends Component {
    handleRandom = () =>{
        this.props.history.push("/BattleRendering");
    }

    handleFriends = () => {
        this.props.history.push("/Friends");
    }
    render() {
        const {classes} = this.props;
        return (
            <div className="homepage-container">
                This is a Battle. 
                <div className="logo">Choose a random battle or battle with friends</div>
                <Link style={{ textDecoration: 'none' }} to={{ pathname: './battleRendering1', state: { name: 'a Random Player'} }}>
                <Button className={classNames(classes.button, classes.primary)}>Random battle</Button>
                </Link>
                <Button onClick={this.handleFriends} className={classNames(classes.button, classes.secondary)}>Friends battle</Button>
            </div>
        );
    }
}

Battle.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Battle);