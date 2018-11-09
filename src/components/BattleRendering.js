import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './BattleRendering.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import strong from '../imgs/strong.gif';
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        maxWidth: 560,
    },
    table: {
        minWidth: 400,
    },
    card: {
        maxWidth: 500,
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
});

class BattleRendering extends Component {

    state = {
        attack: 50,
        record: "Battle record",
        showModel: 1,
    };


    handleEscape = event => {
        this.props.history.push('/Battle');
    }

    handleAttack = event => {
        var temp = this.state.attack - 10;
        var show = this.state.showModel + 1;
//        var newRecord = this.state.record + "/n" + "you deal 10 DMG to Tom";
        if (temp > 0) {
            this.setState({ attack: temp });
//           this.setState({ record: newRecord })
            this.setState({ showModel: show })
        }
        else {
            this.props.history.push('/card');
        }
    };

    render() {
        const { classes } = this.props;


        return (

            <div className="battle-container">
                this is battle
                <div className="row1">
                    <Card className={classes.card}>
                        <CardActionArea>
                            <div className="bar-container">
                                <div className="HP-bar1">
                                    <span>Opponent HP: </span><progress value={this.state.attack} max="50"></progress>
                                </div>
                            </div>
                            <img src={strong} alt="monster" />
                            <div className="HP-bar2">
                                <span>Your HP: </span><progress value="50" max="50"></progress>
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    You are battling with Tom
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={this.handleAttack}>
                                attack

                            </Button>
                            <Button size="small" color="primary" onClick={this.handleEscape}>
                                escape
                            </Button>
                        </CardActions>
                    </Card>

                    <Paper className={classes.root}>
                        <List component="nav">
                            <ListItem>
                                {/* <ListItemIcon>
                        
                            </ListItemIcon> */}
                                <ListItemText primary={this.state.record} />
                            </ListItem>
                            {
                                this.state.showModel <= 1
                                    ?
                                    <div></div>
                                    :
                                    <ListItem>
                                        <ListItemText primary="you punched Tom and done 10 DMG" />
                                    </ListItem>
                            }
                            {this.state.showModel <= 2
                                ?
                                <div></div>
                                :
                                <ListItem>
                                    <ListItemText primary="you slapped Tom in the face -10 HP" />
                                </ListItem>
                            }
                            {this.state.showModel <= 3
                                ?
                                <div></div>
                                :
                                <ListItem>
                                    <ListItemText primary="you kick Tom's stomach done 10 DMG" />
                                </ListItem>
                            }
                            {this.state.showModel <= 4
                                ?
                                <div></div>
                                :
                                <ListItem>
                                    <ListItemText primary="you deal 10 DMG to Tom" />
                                </ListItem>
                            }
                        </List>
                    </Paper>
                </div>
            </div>

        );
    }
}

BattleRendering.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BattleRendering);
