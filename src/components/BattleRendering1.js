import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './BattleRendering1.css';
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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

class BattleRendering1 extends Component {

    state = {
        attack: 50,
        record: "Battle record",
        showModel: 1,
        open: false,
        win: false,
        lose: false 
    };


    handleEscape = event => {
        // this.props.history.push('/Battle');
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({ open: false });
    }
    
    handleConfirmEscape = () => {
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
            // this.props.history.push('/card');
            this.setState({win: true})
        }
    };

    render() {
        const { classes } = this.props;
        const {name} = this.props.location.state


        return (

            <div className="battle-container">
                Battle with {name} 
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

                        </CardActionArea>
                        {
                            this.state.win 
                            ?
                            <CardActions>
                                <Button className="attack-btn" size="large" color="primary" onClick={()=>{this.props.history.push('/card')}}>
                                    Yeah! Draw a card!
                                </Button>
                                <Button size="large" color="secondary" onClick={()=>{this.props.history.push('/dashboard')}}>
                                    I don't want to draw a card.
                                </Button>
                            </CardActions>
                            :
                            <CardActions>
                                <Button className="attack-btn" size="large" color="primary" onClick={this.handleAttack}>
                                    Attack
                                </Button>
                                <Button className="escpape-btn" size="large" color="secondary" onClick={this.handleEscape}>
                                    Escape
                                </Button>
                        </CardActions>
                        }
                    </Card>

                    <Paper className={classes.root}>
                        <List className="record"component="nav">
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
                            {this.state.win 
                                ?
                                <ListItem>
                                    <ListItemText primary="Congrats! You win!" />
                                </ListItem>
                                :
                                <div></div>
                            }
                        </List>
                    </Paper>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">{" Are you sure that you want to escape?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                           You will lose this battle by escaping but this is a good strategy to avoid further damage!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary" autoFocus >
                        Cancel
                        </Button>
                        <Button onClick={this.handleConfirmEscape} color="primary">
                        Yes, I want to escpape
                        </Button>
                    </DialogActions>
                    </Dialog>
                </div>
            </div>

        );
    }
}

BattleRendering1.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BattleRendering1);
