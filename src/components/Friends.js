import React, { Component } from 'react';
import './friends.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Friendlist from './common/friendlist';
import Search from './common/Search';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
    root: {
        width: 500,
    },
};

class Friends extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className="friends-container">
                This is a friends page.
                <div className="friends-container-1">
                    <div className="friends-list">
                        <Friendlist />
                    </div>
                    <div className="friends-container">
                        <div className="search-friend">
                            <Search />
                        </div>

                        <Grid container justify="center">
                            <Grid item>
                                <Tooltip title="Add" placement="right-start">
                                    <Button>Add Friend</Button>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }

}


export default Friends;