import React, { useState } from 'react'

import { signin,signout } from '../../actions/userauth';
import { useSelector, useDispatch } from 'react-redux'

import { AppBar, Box, Toolbar, MenuList, Typography, Paper, ListItemText, Divider, Button, Input, makeStyles, Grid, EditIcon, MenuItem, TextField } from '@material-ui/core'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';



import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const useStyle = makeStyles({
    appbar: {
        background: " #2874f0",
        // height: "55px"
    },

    flipkart: {
        fontSize: "27px",
        fontWeight: "bold",
        marginRight: "14px"
    },
    typography: {
        fontSize: "10px",
        marginTop: "-8px",
        marginLeft: "12px",
    },
    input: {
        width: "55%",
        background: "white",
        padding: "0.1vh",
    },
    toolbar: {
        display: "flex",
        minHeight: "55px",
        justifyContent: "center"
    },
    search: {
        color: "#2874f0",
        background: "white",
        padding: "0.3vh",
        marginTop: "-1px"

    },
    login: {
        background: "white",
        color: " #2874f0",
        padding: "3px 32px 3px 32px",
    },
    more: {
        display: 'flex',
        marginLeft: "5vh"

    },
    cart: {
        display: 'flex',
        marginLeft: "5vh"

    },
    loginhover: {
        position: "absolute",
        top: "42px",
        right: "43vh",
        zIndex: "1",
        "& .MuiPaper-rounded": {
            width: "30vh",
            marginTop: "-3vh"
        },
        "& .css-i4bv87-MuiSvgIcon-root ": {
            color: "white",
            marginLeft: "44%",
            fontSize: "3rem",
            marginTop: "-2vh"

        }
    }


})

export const Header = () => {

    const [open, setOpen] = React.useState(false);

    const [signup, setSignup] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [error, setError] = useState("");

    const [hover, setHover] = useState(false)

    const [style, setStyle] = useState({ display: 'none' });
    const [stylemore, setStylemore] = useState({ display: 'none' });


const token = localStorage.getItem("token")
const user=JSON.parse(localStorage.getItem("user"))

    const state = useSelector(state => state.usersignin)

    const MouseOver = (event) => {
        setStyle({ display: 'block' });
    }
    const MouseOut = (event) => {
        setStyle({ display: 'none' })
    }
    const MouseOvermore = (event) => {
        setStylemore({ display: 'block' });
        setHover(true)
    }
    const MouseOutmore = (event) => {
        setStylemore({ display: 'none' })
        setHover(false)
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

   const dispatch = useDispatch()

    const handleClose = () => {
        setOpen(false);
        dispatch(signin({ email, pass }))
    };

    // more props 
    const arrowicon = (props) => {
        return props
    }
    // more fucntion 
    const morearrayhover = (event, arraylist = []) => {
        arraylist.push(
            <div onMouseOut={() => setStylemore({ display: 'none' })} style={{ display: "block" }}>

                <div>
                    <ArrowDropUpIcon />
                </div>
                <Paper sx={{}}>

                    <MenuList>
                        {event.map((e) => {
                            return (
                                <>
                                    <MenuItem>
                                        <ListItemText>{e.labe}</ListItemText>
                                        <a href={e.href}>{e.a} </a>

                                    </MenuItem>
                                    <Divider />
                                </>
                            )
                        })}

                    </MenuList>
                </Paper>
            </div>
        )
        return arraylist
    }

    const loginarray = [
        { labe: "New Customer ?", a: "sign up", href: "hjjjhjhjhjhj" },
        { labe: "my progile" },
        { labe: "flipkart plus zone" },
        { labe: "orders" },
        { labe: "whatlist" },
        { labe: "rewards" },
        { labe: "giftcard" },
    ]
    const morearray = [
        { labe: "notification preference" },
        { labe: "sell on flipkart" },
        { labe: "24 * 7 customer care" },
        { labe: "whatlist" },
        { labe: "advertise" },
        { labe: "download app" },
    ]



    


    const classes = useStyle()
    return (
        <>

            <div onMouseOver={MouseOvermore} onMouseOut={MouseOutmore} style={stylemore}>
                <div className={classes.loginhover} style={{ right: "28vh", }}>

                    {morearrayhover(morearray)}

                </div>


            </div>
            <div onMouseOver={MouseOver} onMouseOut={MouseOut} style={style}>

                <div className={classes.loginhover} style={{ right: "43vh", }}>

                    {morearrayhover(loginarray)}

                </div>

            </div>
            <AppBar className={classes.appbar} position="static">

                <Grid container >
                    <Grid item xs={12} md={8}  >
                        <Toolbar className={classes.toolbar}>
                            <Box>
                                <a href="/" >
                                <div className={classes.flipkart} >flipkart </div>
                                </a>
                                <Typography className={classes.typography}>
                                    explore plus
                                    <img style={{ height: "12px", margin: "4px 0px 0px 2px" }} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" />
                                </Typography>
                            </Box>
                            <Input className={classes.input} type="search" />
                            <Box className={classes.search}>
                                < SearchIcon />
                            </Box>

                        </Toolbar>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Toolbar style={{ display: "flex", minHeight: "55px", }}>

                            <Typography onMouseOver={MouseOver} onMouseOut={MouseOut} className={classes.login} onClick={(token)?null:handleClickOpen}>
                               {(token)?user.firstName : <div>Login</div>}
                            </Typography>
                            <Typography onMouseOver={MouseOvermore} onMouseOut={MouseOutmore} className={classes.more} >
                                More
                                {(hover == false) ? arrowicon(<KeyboardArrowDownIcon />) : arrowicon(<KeyboardArrowUpIcon />)}
                            </Typography>
                            <Typography className={classes.cart} >

                                <Link to="/cart" >
                                    <ShoppingCartIcon />
                                    Cart
                                </Link>
                            </Typography>

                        </Toolbar>

                    </Grid>
                </Grid>

            </AppBar>



            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
             


                <div className="authContainer">
                    <div className="row">
                        <div className="leftspace">
                            <h2>Login</h2>
                            <p>Get access to your Orders, Wishlist and Recommendations</p>
                        </div>
                        <div className="rightspace">
               

                                <TextField
                                    type="text"
                                    label="Email/Mobile Number"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextField
                                    type="password"
                                    label="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                      rightElement={<a href="#">Forgot?</a>}
                                />
                                
                        </div>
                    </div>
                </div>
      
                {/* Logo  */}
                <div className="logo">
                    <a href="">
                        <img src="" className="logoimage" alt="" />
                    </a>
                    <a style={{ marginTop: "-10px" }}>
                        <span className="exploreText">Explore</span>
                        <span className="plusText">Plus</span>
                        <img src="" className="goldenStar" alt="" />
                    </a>
                </div>





                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus> Agree</Button>
                </DialogActions>
            </Dialog>




        </>
    )
}



