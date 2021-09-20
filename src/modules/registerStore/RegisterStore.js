import {React, useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addPic, addStore } from '../../store/actions/Actions';
import { doSignup } from '../../store/actions/AuthAction';
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
export default function RegisterStore() {
  const picUrl = useSelector(state => state.reducer.records)
  const authState = useSelector(state=> state.AuthReducer.isUserLoggedIn)
  const [upload, setUpload] = useState(false)
  console.log('upload',upload);
  console.log('authState',authState);
console.log('picUrl',picUrl);
  const [loading, setLoading] = useState(false);
  const [pending, setPending] = useState(true);
    const classes = useStyles();
    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const [resName, setresName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [storePic, setstorePic] = useState(null)
    const dispatch= useDispatch()
    const data={
      fName:fName,
      lname:lName,
      resName:resName,
      email:email,
      password:password,
      storePic:picUrl,
      type:"admin"
    }
    return (
     <div style={{background:`url("fbg.jpg")`, height:"auto", backgroundColor:"white",  }}>
      <div style={{backgroundColor:"rgba(0, 0, 0, 0.5)", padding:"1px"}}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
      <div style={{backgroundColor:"white", padding:"0px 40px 0px 40px", borderRadius:"10px"}}>
      <div className={classes.paper}>
      <h3 style={{color:"black", fontFamily:"sans-serif", fontWeight:"600", paddingTop:"20px"}}>Create Store</h3>

          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                style={{height:"20px"}}
                  autoComplete="fname"
                  value={fName}
                  onChange={(e) => setfName(e.target.value)}
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={lName}
                  onChange={(e) => setlName(e.target.value)}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={resName}
                  onChange={(e) => setresName(e.target.value)}
                  id="Resturant Name"
                  label="Resturant Name"
                  name="ResturantName"
                  autoComplete="Resturant Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                  <h6 style={{display:"inline"}}>Select Picture</h6>
              <input accept="image/*"  style={{display:"none"}} id="icon-button-file" type="file" onChange={(e) => setstorePic(e.target.files[0])}/>
      <label htmlFor="icon-button-file">
        <IconButton  color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
        
      </label>
      <Button
              // type="submit"
              
              variant="contained"
              color="disable"
              className={classes.submit}
              onClick={()=>{storePic==null?alert('Please Select a picture First'):dispatch(addPic(setLoading, storePic));setUpload(true)}}            >
              { storePic==null? 'Upload':storePic!=null && upload==false?'Upload':upload==true && picUrl[0]!='h'? 'Uploading':picUrl[0]=='h' && 'Uploaded'}    
            </Button>
            {console.log('img',storePic)}
            </Grid>
            </Grid>
           
           <Link to={fName=='' || lName=='' || resName=='' || email=='' || password=='' || picUrl[0]!= 'h'?'/registerstore':'/dashboard'}>
           <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=>  {fName=='' || lName=='' || resName=='' || email=='' || password=='' || picUrl[0]!= 'h'?alert('Please Select required fields'):dispatch(addStore(data, setLoading)); dispatch(doSignup(data, setPending))}}
            
            >
              Create Store!
            </Button>
           </Link>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </div>
      </Container>
      </div>
     </div>
    );
  }