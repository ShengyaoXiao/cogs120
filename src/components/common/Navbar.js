import React, {Component} from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem';
import Logo from "../../imgs/logo.png";

const toDashboard = props => <Link to="./dashboard" {...props} />
const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    menuItem: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: "18px",
        textTransform: "uppercase",
        letterSpacing: "1px",
        fontWeight: "700",
        lineHeight: "1em",
        color: "#333",
    }
  };

  class Navbar extends Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = event => {
        this.setState ({auth: event.target.checked});
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
      this.setState({anchorEl: null});
    };

    render() {
      // These field may be used in the future so PLEASE DO NOT delete
      const { classes } = this.props;
      // const { anchorEl } = this.state;
      // const open = Boolean(anchorEl);
      return (
          <div className={classes.root}>
              {/* App bar */}
              <div className="nav-bar">
              <AppBar style={{backgroundColor: "#FFE66D"}}position = 'fixed'>
                  <Toolbar>
                        <Dropdown />
                        <MenuItem className={classes.menuItem}component={toDashboard} >
                        <img style={{width:"15px", height:"16px", marginRight:"4px"}}alt="logo"src={Logo}/>
                           Monster Fighter 
                           {/* <img style={{width:"15px", height:"16px"}}alt="logo"src={Logo}/> */}
                        </MenuItem>
                  </Toolbar>
              </AppBar>
              </div>
          </div>
      );
    }
}

Navbar.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Navbar)
