import React, { useEffect, useState } from 'react'
import getparam from '../../../api/utils/getparam';
import { useSelector, useDispatch } from 'react-redux'
import { getproductbyfilterslug } from '../../../actions/products';
import { AppBar, Checkbox, Box, Toolbar, MenuList, Typography, Paper, ListItemText, Divider, Button, Input, makeStyles, Grid, EditIcon, MenuItem } from '@material-ui/core'
import { gethighlight } from '../../../actions/highlight';

const useStyle = makeStyles({

})
const Productfilter = (props) => {
    const [age, setAge] = useState({});
    const [text, setText] = useState('');
    const [style, setStyle] = useState(false);

    const params = getparam(props.location.search);
    const Productfilter = useSelector(state => state.getproductbyfilterslug);

    const issuccess = Productfilter.issuccess

    const dispatch = useDispatch()
    const classes = useStyle()
    const handleChange = (e, index) => {
        setText(e);
        setAge(index);
        (style == false) ? setStyle(true) : setStyle(false)
    }
    var { match } = props

    useEffect(() => {
        dispatch(getproductbyfilterslug(match.params.slug,match.params.cid))
        dispatch(gethighlight(params.parentid))
    }, []);
    return (
        <>
            <Grid container style={{ background: '#F5F5F5' }}>
                <Grid item md={2} style={{ background: "white", margin: "1vh" }}>
                    {(issuccess === true) ? Productfilter.highlight[0].children.map((e, index) => {

                        return (
                            <>
                                <div style={{ background: "pink" }} onClick={() => handleChange(e, index)}>{e.name}  </div>
                                <div>
                                    {
                                        (text.name && age == index && style == true) ?
                                            <div >{text.children.map((e) => (
                                                <>
                                                
                                                    <a  href={`/${e.slug}/${match.params.cid}?cid=${e._id}&parentid=${params.parentid}&pagetype=filterpage`} >
                                                        {e.name}
                                                    </a>
                                                </>
                                            ))} </div>

                                            : null
                                    }
                                </div>
                            </>
                        )
                    }) : null}

                </Grid>
                <Grid item style={{ marginTop: "1vh", width: "82%" }}>
                    <Typography>Mobiles(Showing 1 – 24 products of 277 products)</Typography>
                    <Box style={{ display: "flex" }}>
                        <Typography>Sort By</Typography>
                        <Toolbar>
                            <div>Popularity</div>
                            <div>Price -- Low to High</div>
                            <div>Price -- High to Low</div>
                            <div>Newest First</div>
                        </Toolbar>

                    </Box>


                    {(issuccess === true) ? Productfilter.product.products.map((e) => {
                        return (
                            <>
                            <a href={`/${e.slug}/${e._id}/productdetail`}>

                                <div style={{ display: "flex", width: "100%", margin: "1vh", background: "white" }}>
                                    <img src="https://rukminim1.flixcart.com/image/312/312/kn7sdjk0/mobile/7/9/u/c20-rmx3063-realme-original-imagfxfzjrkqtbhe.jpeg?q=70" />
                                    <Box>
                                        <div>{e.name}</div>
                                    </Box>
                                    <Box>
                                        {e.highlightData.map((high, index) => {
                                            return <div>{high.descriptionfilter}</div>
                                        })}

                                    </Box>
                                    <Box>

                                        <div>{e.price}</div>
                                        <div>up to 6500 off on exchange</div>

                                    </Box>
                                </div>
</a>
                            </>
                        )
                    }) : null}




                </Grid>
            </Grid>

        </>
    )
}

export default Productfilter




