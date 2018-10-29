import React, {Component} from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dropdown from './Dropdown';

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
              <AppBar position = 'fixed'>
                  <Toolbar>
                        <Dropdown />
                        <Typography className="app-title" variant = 'title'>
                            Budokan 
                        </Typography>
                  </Toolbar>
              </AppBar>
          </div>
      );
    }
}

Navbar.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Navbar)
