import React, {useRef, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../Copyright/Copyright';
import { useAuth } from '../../contexts/AuthContext';
import { Alert } from '@material-ui/lab';

import {  useHistory } from 'react-router-dom';



import useStyles from './Logout.styles';

export default function Logout() {
    const classes = useStyles();
    
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const [error, setError] = useState("");

const handleLogout = async () => {
    setError("");

    try {
        await logout();
        history.push("/signin");
    }
    catch(e) {
        setError(e);
    }


}


    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className="whiteHeader">
            Logged in as
          </Typography>
          <Typography component="h1" variant="h5" className="whiteHeader">
          {currentUser && currentUser.email}
          </Typography>
          <Button
                  onClick={handleLogout}
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Log out
                </Button>
          
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    )
}
