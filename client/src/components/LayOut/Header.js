import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "rgba(0,0,0,.32)",
        overflow: "hidden",
        display: "flex"
    },
    flexStyle: {
        display: "flex",
        width: "50%"
    },
    button: {
        color: "#fff",
        backgroundColor: "hsla(0,0%,100%,.3)",
        margin: theme.spacing(1),
        fontSize: "1rem",
        maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.flexStyle} style={{justifyContent: "space-between"}}>
                <Button size="small" className={classes.button}><DashboardIcon/></Button>
                <div style={{fontFamily: 'Permanent Marker', display: "flex", alignItems: "center", fontSize: "30px"}}>Kanban</div>
            </div>
            <div className={classes.flexStyle} style={{justifyContent: "flex-end"}}>
                <Button size="small" className={classes.button}><AddIcon/></Button>
                <Button size="small" className={classes.button}><NotificationImportantIcon/></Button>
                <Button size="small" className={classes.button}><AccountCircleIcon/></Button>
            </div>
        </div>
    )
}

export default Header;
