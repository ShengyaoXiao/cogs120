import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';  
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './stats.css';
import monsterDemo from '../imgs/monster.gif';
import Collection from './common/Collection';

const option = {
    title: {
        text: 'Composition'
    },
    tooltip: {},
    legend: {
        data: ['Score']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#282c34',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: 'Defence', max: 6500},
           { name: 'Luck', max: 16000},
           { name: 'Speed', max: 30000},
           { name: 'HP', max: 38000},
           { name: 'Attack', max: 52000},
        ]
    },
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : 'Composition'
            }
        ]
    }]
};
const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      maxWidth: 360,
    },
    table: {
        minWidth: 300,
      },
  });

let id = 0;
function createData(stats, workoutExp, accessoryPlus) {
    id += 1;
    return { id, stats, workoutExp, accessoryPlus };
}

const rows = [
    createData('HP', 10, +2),
    createData('Attack', 28, +12),
    createData('Defence', 25, +7),
    createData('Luck', 7, -2),
    createData('Speed', 2, -3),
];
  
class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const { classes } = this.props;
        const {name} = this.props.location.state
        return (
            <div className="stats-container">
                <br/><br/><br/><br/>
                <div className="row1">
                    <div className="stats-profile-container">
                        <img src={monsterDemo} alt="monster"/>
                        <div className="progress-bar">
                        <span>EXP: </span><progress value="38" max="50"></progress><span>Lv 38</span>
                        </div>
                    </div>
                    <div className="stats-info-container">
                        <div>Name: {name}'s pet</div>
                        <div>Type: Fighting</div>
                    </div>
                </div>
                <div className="row2">
                    <div className="radar-container">
                        <ReactEcharts
                            style={{height: '300px', width:'360px'}}
                            option={option}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"dark"}
                        />
                    </div>
                    <div className="table-container">
                        <Paper className={classes.root}>
                            <Table className={classes.table}>
                                <TableHead>
                                <TableRow>
                                    <TableCell>Stats</TableCell>
                                    <TableCell numeric>Workout Exp</TableCell>
                                    <TableCell numeric>Accessory Plus</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map(row => {
                                    return (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                        {row.stats}
                                        </TableCell>
                                        <TableCell numeric>{row.workoutExp}</TableCell>
                                        <TableCell numeric>{row.accessoryPlus}</TableCell>
                                    </TableRow>
                                    );
                                })}
                                </TableBody>
                            </Table>
                        </Paper>
                    </div>
                </div>
                <div className="row3">
                <div className="stats-collection-container">
                    <Collection />
                </div>
                <Paper className={classes.root}>
                    <List component="nav">
                        <ListItem>
                            <ListItemText primary="Chelsea Otakan" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Eric Hoffman" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Eric Hoffman" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Eric Hoffman" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Eric Hoffman" />
                        </ListItem>
                    </List>
                </Paper>
                </div>
            </div>
        );
    }
}


Stats.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Stats);