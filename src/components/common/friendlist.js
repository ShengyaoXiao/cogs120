import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import '../friends.css'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '200%',
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  button: {
    margin: theme.spacing.unit,
  },
});


class friendlist extends Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClose = title => {
        this.setState({
            open: false,
            title: title 
        });
    };

render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
      <List>
        <ListItem>
            <Avatar
                className={classes.avatar}>J
            </Avatar>
            <ListItemText primary="Jeff" secondary="Jan 9, 2014" />
            <Link to="./stats">
                <Button variant="fab" disabled aria-label="stats" className={classes.button}>
                    <i className="fas fa-chart-bar"></i>
                </Button> 
            </Link>
            <Link to="./battle">
                <Button variant="fab" disabled aria-label="battle" className={classes.button}>
                    <i className="fas fa-gamepad"></i>
                </Button>
            </Link>                          
            <Button variant="fab" disabled aria-label="Delete" className={classes.button}>
                <DeleteIcon />
            </Button>
        </ListItem>
        <li>
          <Divider inset />
        </li>

        <ListItem>
            <Avatar
                className={classes.orangeAvatar}>T
            </Avatar>
            <ListItemText primary="Tom" secondary="Jan 7, 2014" />
            <Link to="./stats">
                <Button variant="fab" disabled aria-label="stats" className={classes.button}>
                    <i className="fas fa-chart-bar"></i>
                </Button> 
            </Link>
            <Link to="./battle">
                <Button variant="fab" disabled aria-label="battle" className={classes.button}>
                    <i className="fas fa-gamepad"></i>
                </Button>
            </Link>                         
            <Button variant="fab" disabled aria-label="Delete" className={classes.button}>
                <DeleteIcon />
            </Button>            
        </ListItem>
        
        <Divider inset component="li" />
        <ListItem>
          <Avatar
            className={classes.purpleAvatar}>J
          </Avatar>
          <ListItemText primary="Jack" secondary="July 20, 2014" />
          <Link to="./stats">
                <Button variant="fab" disabled aria-label="stats" className={classes.button}>
                    <i className="fas fa-chart-bar"></i>
                </Button> 
            </Link>
            <Link to="./battle">
                <Button variant="fab" disabled aria-label="battle" className={classes.button}>
                    <i className="fas fa-gamepad"></i>
                </Button>
            </Link>                          
            <Button variant="fab" disabled aria-label="Delete" className={classes.button}>
                <DeleteIcon />
            </Button>         
        </ListItem>


        <Divider inset component="li" />
        <ListItem>
          <Avatar
            className={classes.avatar}>PG
          </Avatar>
          <ListItemText primary="Philip Guo" secondary="July 20, 2014" />
          <Link to="./stats">
                <Button variant="fab" disabled aria-label="stats" className={classes.button}>
                    <i className="fas fa-chart-bar"></i>
                </Button> 
            </Link>
            <Link to="./battle">
                <Button variant="fab" disabled aria-label="battle" className={classes.button}>
                    <i className="fas fa-gamepad"></i>
                </Button>
            </Link>                          
            <Button variant="fab" disabled aria-label="Delete" className={classes.button}>
                <DeleteIcon />
            </Button>         
        </ListItem>
      </List>
    </div>
    );
}
}
friendlist.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(friendlist);
