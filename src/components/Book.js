import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
  
}

const useStyles2 = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Book() {
  const classes = useStyles();
  const [brand, setbrand] = React.useState('');
  const [touch, settouch] = React.useState('');

  const handleChange = (event) => {
    setbrand(event.target.value);
  };
  const handleChange1 = (event) => {
    settouch(event.target.value);
  };
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LocalBarIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Book A Vellam Adi
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="Sponser"
                variant="outlined"
                required
                fullWidth
                id="Sponser"
                label="Sponser name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Number of people"
                name="NoOfPeople"
                autoComplete="lname"
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
            <InputLabel id="demo-simple-select-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brand}
          onChange={handleChange}
          name="brand"
        >
          <MenuItem value={10}>Jawan</MenuItem>
          <MenuItem value={20}>Old Monk</MenuItem>
          <MenuItem value={30}>MH</MenuItem>
          <MenuItem value={30}>Magic moment</MenuItem>
          <MenuItem value={30}>Bacardi</MenuItem>
        </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="litre"
                label="how much litre?"
                type="number"
                id="password"
                
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
            <InputLabel id="demo-simple-select-label">Touchings</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={touch}
          onChange={handleChange1}
          name="touching"
        >
          <MenuItem value={10}>pakka vada</MenuItem>
          <MenuItem value={20}>mixture</MenuItem>
          <MenuItem value={30}>barbeeque</MenuItem>
          <MenuItem value={30}>achar</MenuItem>
          <MenuItem value={30}>chips</MenuItem>
        </Select>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I promise not to make any alamb during the vellam adi"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Book
          </Button>
         
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}