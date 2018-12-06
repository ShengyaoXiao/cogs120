import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
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
                <Link to={{ pathname: './battleRendering1', state: { name: 'a Random Player'} }}>
                <Button variant="outlined" color="secondary" className={classes.button}>Random battle</Button>
                </Link>
                <Button variant="outlined" onClick={this.handleFriends} color="primary" className={classes.button}>Friends battle</Button>
            </div>
        );
    }
}

Battle.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Battle);