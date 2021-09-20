import { React, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFood } from '../../store/actions/FoodAction';
import { addPic } from '../../store/actions/Actions';
import DropDownMenu from '../../components/dropDown/DropDownMenu';
import { Link } from 'react-router-dom';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to='/'>
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
export default function AddFood() {
  const picUrl = useSelector(state => state.reducer.records)
  const imData = useSelector(state => state.foodReducer.category)

  const [loading, setLoading] = useState(false);
  const [fdName, setfdName] = useState('')
  const [fdDetails, setfdDetails] = useState('')
  const [fdPic, setfdPic] = useState(null)
  const [price, setprice] = useState()
  const dispatch = useDispatch()
  const data = {
    fdName: fdName,
    fdDetails: fdDetails,
    fdPic: picUrl,
    fPrice: price,
    fCategory: imData
  }
  console.log('imData', imData);

  const classes = useStyles();

  return (
    <div style={{ background: `url("fbg.jpg")`, height: "auto", backgroundColor: "white", }}>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "1px" }}>
        <Container component="main" maxWidth="xs" >
          <CssBaseline />
          <div style={{ backgroundColor: "white", padding: "0px 40px 0px 40px", borderRadius: "10px" }}>
            <div className={classes.paper}>
              <h3 style={{ color: "black", fontFamily: "sans-serif", fontWeight: "600", paddingTop: "20px" }}>Add Food</h3>

              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      value={fdName}
                      onChange={(e) => setfdName(e.target.value)}
                      required
                      fullWidth
                      id="Food Name"
                      label="Food Name"
                      name="FoodName"
                      autoComplete="Food Name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      value={price}
                      onChange={(e) => setprice(e.target.value)}
                      required
                      fullWidth
                      id="Price"
                      label="Price"
                      name="Price"
                      autoComplete="Price"
                    />
                    <DropDownMenu />
                    <h3>Category:  <h5 style={{ display: "inline" }}>{imData == '' ? 'Please Select' : imData}</h5></h3>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      value={fdDetails}
                      onChange={(e) => setfdDetails(e.target.value)}
                      required
                      fullWidth
                      id="foodDetails"
                      label="Food Details"
                      name="Details"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <h6 style={{ display: "inline" }}>Select Picture</h6>
                    <input accept="image/*" style={{ display: "none" }} id="icon-button-file" type="file" onChange={(e) => setfdPic(e.target.files[0])} />
                    <label htmlFor="icon-button-file">
                      <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                      </IconButton>

                    </label>
                    <Button
                      // type="submit"

                      variant="contained"
                      color="disable"
                      className={classes.submit}
                      onClick={() => fdPic == null ? alert('Please Select a picture First') : dispatch(addPic(setLoading, fdPic))}            >
                      {loading ? <div>Uploading..</div> : 'Upload'}
                    </Button>
                  </Grid>
                </Grid>

                <Link to={imData == '' || fdName == '' || fdDetails == '' || fdPic == null ? '/addfood' : "/dashboard"}>
                  <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => imData == '' || fdName == '' || fdDetails == '' || fdPic == null ? alert('Please Select all fields') : dispatch(() => addFood(data, setLoading))}
                  >
                    Add Food!
                  </Button>
                </Link>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to='/dashboard'>
                      Cancel
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