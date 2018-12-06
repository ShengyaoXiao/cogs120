import React, {Component} from 'react';
import monsterDemo from '../imgs/weapon_none_loop.gif';
import './dashboard.css';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import $ from 'jquery';

class Dashboard extends Component {
    toChallenge = () => {
        this.props.history.push('/challenge');
    }

    render() {
        return (
            <div className="dashboard-container">
                Hello, {localStorage.getItem("username")}! <br/>
                Feed your little monster by completing your daily tasks! 
                <div className="dashboard-profile">
                    <img style={{width: "520px", height: "390px"}}src={monsterDemo} alt="monster"/>
                    {/* <div className="progress-bar">
                    <span>EXP: </span><progress value="38" max="50"></progress><span>Lv 38</span> */}
                    <div class="progress shine" data-width="30%">
                        <div class="progress-text">EXP 80%</div>
                        <div class="progress-bar">
                        <div class="progress-text">EXP 80%</div>
                    </div>
                </div>
                </div>
                <div className="dashboard-list">
                    <Link style={{ textDecoration: 'none' }} to="./challenge">
                        <span className="icon">
                            <i className="fa-lg fas fa-tasks"></i>
                        </span>
                        <div>
                        <Typography className="desc" variant='body2'>
                            Task
                        </Typography>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to={{ pathname: './Stats', state: { name: 'player'} }}>
                        <span className="icon"> 
                            <i className="fas fa-lg fa-chart-bar"></i>
                        </span>
                        <Typography className="desc" variant='body2'>
                            Stats
                        </Typography>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="./battle">
                        <span className="icon">
                            <i className="fas fa-lg fa-gamepad"></i>
                        </span>
                        <Typography className="desc" variant='body2'>
                           Battle
                        </Typography>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="./friends">
                        <span className="icon">
                            <i className="fas fa-lg fa-user-friends"></i>
                        </span>
                        <Typography className="desc" variant='body2'>
                            Friends
                        </Typography>
                    </Link>
                </div>
            </div>
        );
    }
}


export default Dashboard;