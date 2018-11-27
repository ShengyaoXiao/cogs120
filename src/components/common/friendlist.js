import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import '../friends.css'
import { Link } from 'react-router-dom'
import '../friends.css';
import Search from '../common/Search';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

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


class friendlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            showModel: false,
            newfriend: null,
            initial: null,
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

    handleAddfirend = event => {
        var getInitials = function (string) {
            var names = string.split(' '),
                initials = names[0].substring(0, 1).toUpperCase();
            
            if (names.length > 1) {
                initials += names[names.length - 1].substring(0, 1).toUpperCase();
            }
            return initials;
        };
        if (localStorage.getItem('friend') !== null) {
            var newFriend = JSON.parse(localStorage.getItem("friend"));
            this.setState({ newfriend: newFriend })
            if({ newfriend: newFriend }){
            this.setState({ showModel: true })
            this.setState({initial: getInitials(newFriend)})
            }
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="friends-container-1">
                <div className={classes.root}>
                    <List>
                        <ListItem>
                            <Avatar
                                className={classes.avatar}>J
            </Avatar>
                            <ListItemText primary="Jeff" secondary="Jan 9, 2014" />
                            {/* <Link to={{ pathname: './stats', state: { name: 'Jeff' } }}>
                                <Button variant="fab" disabled aria-label="stats" className={classes.button}>
                                    <i className="fas fa-chart-bar"></i>
                                </Button>
                            </Link> */}
                            {/* <Link to={{ pathname: './battleRendering', state: { name: 'Jeff' } }}>
                                <Button variant="fab" disabled aria-label="battle" className={classes.button}>
                                    <i className="fas fa-gamepad"></i>
                                </Button>
                            </Link> */}
                            {/* <Button variant="fab" disabled aria-label="Delete" className={classes.button}>
                                <DeleteIcon />
                            </Button> */}
                        </ListItem>
                        <li>
                            <Divider inset />
                        </li>

                        <ListItem>
                            <Avatar
                                className={classes.orangeAvatar}>T
            </Avatar>
                            <ListItemText primary="Tom" secondary="Jan 7, 2014" />
                            {/* <Link to={{ pathname: './stats', state: { name: 'Tom' } }}>
                                <Button variant="fab" disabled aria-label="stats" className={classes.button}>
                                    <i className="fas fa-chart-bar"></i>
                                </Button>
                            </Link>
                            <Link to={{ pathname: './battleRendering', state: { name: 'Tom' } }}>
                                <Button variant="fab" disabled aria-label="battle" className={classes.button}>
                                    <i className="fas fa-gamepad"></i>
                                </Button>
                            </Link>
                            <Button variant="fab" disabled aria-label="Delete" className={classes.button}>
                                <DeleteIcon />
                            </Button> */}
                        </ListItem>

                        <Divider inset component="li" />
                        <ListItem>
                            <Avatar
                                className={classes.purpleAvatar}>J
          </Avatar>
                            <ListItemText primary="Jack" secondary="July 20, 2014" />
                            {/* <Link to={{ pathname: './stats', state: { name: 'Jack' } }}>
                                <Button variant="fab" disabled aria-label="stats" className={classes.button}>
                                    <i className="fas fa-chart-bar"></i>
                                </Button>
                            </Link>
                            <Link to={{ pathname: './battleRendering', state: { name: 'Jack' } }}>
                                <Button variant="fab" disabled aria-label="battle" className={classes.button}>
                                    <i className="fas fa-gamepad"></i>
                                </Button>
                            </Link>
                            <Button variant="fab" disabled aria-label="Delete" className={classes.button}>
                                <DeleteIcon />
                            </Button> */}
                        </ListItem>


                        <Divider inset component="li" />
                        <ListItem>
                            <Avatar
                                className={classes.avatar}>PG
          </Avatar>
                            <ListItemText primary="Philip Guo" secondary="July 20, 2014" />
                            {/* <Link to={{ pathname: './stats', state: { name: 'Philip Guo' } }}>
                                <Button variant="fab" disabled aria-label="stats" className={classes.button}>
                                    <i className="fas fa-chart-bar"></i>
                                </Button>
                            </Link>
                            <Link to={{ pathname: './battleRendering', state: { name: 'Philip Guo' } }}>
                                <Button variant="fab" disabled aria-label="battle" className={classes.button}>
                                    <i className="fas fa-gamepad"></i>
                                </Button>
                            </Link>
                            <Button variant="fab" disabled aria-label="Delete" className={classes.button}>
                                <DeleteIcon />
                            </Button> */}
                        </ListItem>
                       
                        <Divider inset component="li" />
                        {
                            this.state.showModel != true
                                ?
                                <div></div>
                                :
                        <ListItem>
                            <Avatar className={classes.orangeAvatar}>{this.state.initial} </Avatar>

                            <ListItemText primary={this.state.newfriend} secondary="July 20, 2014" />
                            {/* <Link to={{ pathname: './stats', state: { name: 'Philip Guo' } }}>
                                <Button variant="fab" disabled aria-label="stats" className={classes.button}>
                                    <i className="fas fa-chart-bar"></i>
                                </Button>
                            </Link>
                            <Link to={{ pathname: './battleRendering', state: { name: 'Philip Guo' } }}>
                                <Button variant="fab" disabled aria-label="battle" className={classes.button}>
                                    <i className="fas fa-gamepad"></i>
                                </Button>
                            </Link>
                            <Button variant="fab" disabled aria-label="Delete" className={classes.button}>
                                <DeleteIcon />
                            </Button> */}
                        </ListItem>
                        }                 
                   </List>
                </div>
                <div className="friends-container-2">
                    <Search />
                </div>
                <Grid container justify="center">
                    <Grid item>
                        <Tooltip title="Add" placement="right-start">
                            <Button onClick={this.handleAddfirend}>
                                Add Friend
                            </Button>
                        </Tooltip>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
friendlist.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(friendlist);
