import React, { Component } from 'react';
import './friends.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Friendlist from './common/friendlist';
import Search from './common/Search';
import SearchFriends from './common/SearchFriends';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
    // root: {
    //     width: 00,
    // },
};

class Friends extends Component {

    render() {
        // const { classes } = this.props;
        return (
            <div className="friends-container">
                Friend List
                <div className="friends-container-1">
                    <div className="friends-list">
                        <Friendlist />
                    </div>
                  
                </div>
            </div>
        );
    }

}


export default Friends;