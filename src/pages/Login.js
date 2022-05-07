import React from "react" ;

import XButton from "../components/Button";
import Input from "../components/Input";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import logo from "../Assets/img/logo.png";
import firstImage from "../Assets/img/firstImage.png";
import third from "../Assets/img/third.png";
import second from "../Assets/img/second.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import flag from "../Assets/img/flag.png"
import MenuList from '@mui/material/MenuList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
const itemData = [
  {
    img: firstImage,
    title: 'Breakfast',
  },
  {
    img: second,
    title: 'Burger',
  },
  {
    img: third,
    title: 'Camera',
  },]
function Login() {
  const matches = useMediaQuery('(max-width:970px)');
  const [openProfile, setopenProfile] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setopenProfile((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setopenProfile(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setopenProfile(false);
    } else if (event.key === 'Escape') {
      setopenProfile(false);
    }
  }
  const prevOpen = React.useRef(openProfile);
  React.useEffect(() => {
    if (prevOpen.current === true && openProfile === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openProfile;
  }, [openProfile]);


  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{    height: matches?"100%":"100vh",display:"flex",justifyContent: 'center',alignItems:"center",textAlign:"center"}}>
       
        <Grid item xs={12}  sm={12} style={{display: "flex",
    justifyContent: "flex-end",
    margin: "10px",top: 0,
    position: "absolute",right:0,zIndex:"5555"}}>

        <FormControl variant="standard"  >
        <div>
       
        <Button
                  ref={anchorRef}

          id="composition-button"
          aria-controls={openProfile ? 'composition-menu' : undefined}
          aria-expanded={openProfile ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{marginInline:"15px"}}
        >
                  <Avatar   sx={{ width: 24, height: 24}}
 alt="Remy Sharp" src={flag} />
<Typography style={{fontSize:"12px",color:"black",marginInline:"15px"}}>

Fr

</Typography>
<ArrowDropDownIcon style={{color:"black",}}/>

        </Button>
      
        <Popper
          open={openProfile}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={openProfile}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}> <SettingsIcon style={{marginInline:"10px"}} /> Fr</MenuItem>
                    <MenuItem onClick={handleClose}> <LogoutIcon style={{marginInline:"10px"}} />  En</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      </FormControl>
     
        </Grid>
       
        <Grid item xs={12}  sm={6} style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",    height: "100%",
    borderRadius: "20px",
    margin: "20px 0px",display: "flex",
    justifyContent: "center",
    alignItems: "center"}}>
   
        <Grid  xs={12} >
        <ImageList sx={{ width:matches? 300:500, height: 350 }} style={{margin:"auto",marginBottom:"20px",overflow:"hidden"}} cols={3} rowHeight={350}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} style={{width:matches?"100px":"auto"}}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            height="300px"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Typography  variant="h4"  style={{   
          margin: "auto",
          marginBlock: "40px",
          
      }} component="h4" color="primary">Track your side effects with <br/> My Nursing Angel</Typography>
      <Typography variant="h5" component="h5">We will change the way you interact with your <br/> doctors, nurses and your pharmacy...
</Typography>
        </Grid>
       
        </Grid>
     
        <Grid item xs={12}  sm={6}>
          <div style={{width:matches?"90%":"50%",margin: 'auto',marginTop:matches?"50px":"0px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        style={{    width: "100px",
          margin: "auto",
          marginBottom: "50px"
      }}
        image={logo}
      />
            <Typography variant="h5"  style={{   
          margin: "auto",
          marginBottom: "40px",
          color:"#5b5a5a"
      }} component="h5">Welcome to Mynursingangel</Typography>
            <div>

            <Input icon={<PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />} text=" Email" />
        <Input icon={<LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />} text=" Password" />
            </div> 
        
           <Typography style={{    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",  color:"#5b5a5a"}}>Forgot Password?</Typography>
           <XButton text="Sign in"/>
           <div style={{    display: "flex",
    justifyContent: "center",
    alignItems: "center"}}>
           <Divider style={{width:"30%",borderColor:"black"}} />
           <Typography style={{marginInline:"10px"}}>or</Typography>
           <Divider  style={{width:"30%",borderColor:"black"}}/>

           </div>
           <Typography variant="h6"  style={{   
          margin: "auto",
          marginBottom: "40px",
          color:"#5b5a5a"
      }} component="h5">Not on mynursing angel yet ? <span style={{fontWeight:"bold"}}>Register</span>  </Typography>
            </div>
       
        </Grid>
       
       
      </Grid>
    </Box>
     
    </div>
  );
}

export default Login;
