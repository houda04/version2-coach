import React from 'react';
import './HomePatient.css'; 
import Footer from './Footer';
import logo from './logoo.png';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FaceIcon from '@material-ui/icons/Face';
import EmailIcon from '@material-ui/icons/Email';
import RateReviewIcon from '@material-ui/icons/RateReview';
import EventNoteIcon from '@material-ui/icons/EventNote';
import RedeemIcon from '@material-ui/icons/Redeem';
import Home from '../Home/Home'
import SearchAppBar from './Appbar';
import CustomizedButtons from './Buttons'
import Videos from './Videos'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: 'green',
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        
        },
    },
  }));
const Landing = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

   
    function FormRow() {
      return (

        <React.Fragment>
          
          <Grid item xs={6}>
            <Paper className={classes.paper}>
           
                <h1>Qui suis-je ?</h1></Paper>
                <h2>Yasmina Nouri </h2>
                <h3>Coach en Développement Personnel </h3>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
                <h1>Prendre un rendez-vous  </h1>
            </Paper>
            <form 
            style = {{marginTop: 50}}
            className={classes.root} noValidate autoComplete="off">
      <div>
      <FaceIcon/>
        <TextField
          id="standard-textarea"
          label="Nom et Prénom"
          placeholder="..."
          multiline
        />
       
      </div>
      <div>
       <EmailIcon/>
        <TextField
          id="filled-textarea"
          label="Adresse mail"
          placeholder="Email"
          multiline
          variant="filled"
        />
       
      </div>
      <div>
       <RateReviewIcon/>
        <TextField
          id="outlined-textarea"
          label="Message"
          placeholder="..."
          multiline
          variant="outlined"
        />
     
      </div>
<EventNoteIcon/>
      <TextField
    id="date"
   
    type="date"
    defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
 
    </form>
    <h3><RedeemIcon/>Appel de 30 Minutes découverte offert </h3>
    <CustomizedButtons/>
          </Grid>
         
        </React.Fragment>
      );
    }
  
  return (
    <div>
      <SearchAppBar/>
        <div>
  <img
    
    style = {{width : '100%'}}
    src= {logo}
    alt="First slide"
  />
  
</div>

<div style = {{width : '100%', marginBottom : 100 ,  backgroundImage: `url("https://thumbs.gfycat.com/UltimateMeekArmedcrab-max-1mb.gif")` }}>
    
    <Grid container spacing={1}>
  <Grid container item xs={12} spacing={3}>
    <FormRow />
  </Grid>
  <Grid container item xs={12} spacing={3}>
  <Paper style = {{marginBottom : 50, width : 700}} className={classes.paper}>
                <h1>Blogs   </h1>
            </Paper>
    <Home />
  </Grid>

 
</Grid>
<Grid container spacing={1}>
 
  <Grid style = {{marginTop: 100}} container item xs={12} spacing={3}>
  <Paper style = {{marginBottom : 50, width : 700}} className={classes.paper}>
                <h1>Vidéos   </h1>
            </Paper>
    <Videos />
  </Grid>
  
 
</Grid>


</div >




<Footer/>



    </div>
    
  );
};

export default Landing ;
