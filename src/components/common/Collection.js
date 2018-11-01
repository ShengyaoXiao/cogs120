import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';
import necklace from '../../imgs/item-icons/amber-necklace.png';
import amour from '../../imgs/item-icons/armour.png';
import cloak from '../../imgs/item-icons/cloak.png';
import greaves from '../../imgs/item-icons/greaves.png';
import helmet from '../../imgs/item-icons/helmet.png';
import kantele from '../../imgs/item-icons/kantele.png';
import helm from '../../imgs/item-icons/metal-helm.png';
import ring from '../../imgs/item-icons/ring.png';
import scroll from '../../imgs/item-icons/scroll.png';
import shield from '../../imgs/item-icons/shield.png';
import leather from '../../imgs/item-icons/studded-leather.png';
import tunic from '../../imgs/item-icons/tunic.png';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const styles = theme => ({
  root: {
    // display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 360,
    height: 300,
  },
  subheader: {
    width: '50%',
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

const tileData = [{
        img: necklace,
        title: 'Necklace'
    },
    {
        img: amour,
        title: 'Amour'
    },
    {
        img: cloak,
        title: 'Cloak'
    },
    {
        img: helmet,
        title: 'Helmet'
    },
    {
        img: greaves,
        title: 'Greaves'
    },
    {
        img: kantele,
        title: 'Kantele'
    },
    {
        img: tunic,
        title: 'Tunic'
    },
    {
        img: ring,
        title: 'Ring'
    },
    {
        img: helm,
        title: 'Helm'
    },
    {
        img: scroll,
        title: 'Scroll'
    },
    {
        img: shield,
        title: 'Shield'
    },
    {
        img: leather,
        title: 'Leather'
    }
    
];
class Collection extends Component{
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
            <GridList cellHeight={100} className={classes.gridList} cols={3}>
                {tileData.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                </GridListTile>
                ))}
            </GridList>
            </div>
        );
    }
}

Collection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Collection);