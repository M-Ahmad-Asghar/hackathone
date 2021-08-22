import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration:"none",
  },
}));
function cta() {
  
}
export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
       <div>
          <FacebookIcon style={{paddingLeft:10}}/>
          <TwitterIcon style={{paddingLeft:10}}/>
          <InstagramIcon style={{paddingLeft:10}}/>
          <YouTubeIcon style={{paddingLeft:10}}/>
       </div>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link to={'/home'}>
          <img src={title} alt="" style={{width:200}}/>
          </Link>
         
        </Typography>
        <Dropdown>
  <Dropdown.Toggle variant="null" id="dropdown-basic">
  <ExitToAppSharpIcon />
  </Dropdown.Toggle>

  <Dropdown.Menu>
    
    <Dropdown.Item >
    <Link to="/login">
      Log in
      </Link>
      </Dropdown.Item>
    
    <Divider variant={"fullWidth"} />
    <Dropdown.Item >
    <Link to="/signup">
      <p>Sign Up</p>
      
      </Link>
      </Dropdown.Item>
    
    <Divider variant={"fullWidth"} />
    <Dropdown.Item >
    <Link to="/home">
      Log Out
      </Link>
      </Dropdown.Item>
    
    <Divider variant={"fullWidth"} />
  
   </Dropdown.Menu>
</Dropdown>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            to={section.url}
            className={classes.toolbarLink}
          >
            <p>{section.title}</p>
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};