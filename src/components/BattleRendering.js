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
        attack:50,
    };
    handleAttack = event => {
        var temp = this.state.attack -10;
        if(temp>0){
        this.setState ({attack: temp});
        }
        else{
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
                                <span>Opponent HP: </span><progress value= {this.state.attack} max="50"></progress>
                            </div>
                            </div>
                            <img src={monsterDemo} alt="monster" />
                            <div className="HP-bar2">
                                <span>Your HP: </span><progress value= "50" max="50"></progress>
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    You are battling with Tom
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick = {this.handleAttack}>
                                attack
                                
                            </Button>
                            <Button size="small" color="primary">
                                skip
                            </Button>
                        </CardActions>
                    </Card>

                    <Paper className={classes.root}>
                        <List component="nav">
                            <ListItem>
                                {/* <ListItemIcon>
                        
                            </ListItemIcon> */}
                                <ListItemText primary="Battle Record" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="you deal 10 DMG to Tom" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="you deal 10 DMG to Tom" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="you deal 10 DMG to Tom" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="you deal 10 DMG to Tom" />
                            </ListItem>
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
