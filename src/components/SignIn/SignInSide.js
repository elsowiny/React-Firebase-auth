import React, {useRef, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../Copyright/Copyright';

import useStyles from './Signin.styles.js';
import { useAuth } from '../../contexts/AuthContext';
import {  useHistory } from 'react-router-dom';

import './SignIn.styles.css';



export default function SignInSide() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const classes = useStyles();
  const {login, currentUser} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();


  async function handleSubmit(e){
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    

      try{
        setError('');
        setLoading(true);
        await login(email, password);
        history.push('/');
        
      } catch{
        setError('Error logging in');
        return;
      }

      setLoading(false);
      

  }
  
















if(currentUser){
  return(<Grid container component="main" className={classes.root}>
  <CssBaseline />
  <Grid item xs={false} sm={4} md={7} className={classes.image} />
  <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {currentUser && currentUser.email}
        <Button variant="contained" color="primary" component="span" onClick={() => history.push('/')} >
          Home</Button>
      </Typography>
      {loading && loading}
      {error && <Typography color="error">{error}</Typography>}
      
    </div>
  </Grid>
</Grid>

  )
}








  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {loading && loading}
          {error && <Typography color="error">{error}</Typography>}
          <form >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              className="blackText"
              inputRef={emailRef}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className="blackText"
              inputRef={passwordRef}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}