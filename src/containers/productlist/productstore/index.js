import React, { useEffect ,useContext,useS} from 'react'
import getparam from '../../../api/utils/getparam';
import { useSelector, useDispatch } from 'react-redux'
import { getproductbyslug } from '../../../actions/products';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { AppBar, Box, Toolbar, MenuList, Typography, Paper, ListItemText, Divider, Button, Input, makeStyles, Grid, EditIcon, MenuItem } from '@material-ui/core'

const useStyle = makeStyles({
    heading: {
        margin: "10px 8px"
    },
    categoryName: {
        fontSize: "28px",
    },
    description: {
        margin: "10px 4px",
        fontSize: "17px",

    }

})



const Productstore = (props) => {

    const category = useSelector(state => state.getproductbyslug);

    const params = getparam(props.location.search);
    const dispatch = useDispatch()
    useEffect(() => {
        const { match } = props
        dispatch(getproductbyslug(match.params.slug))
    }, []);
    const classes = useStyle()

    console.log(params)
    return (
        <>
            <div>{params.cid}</div>
            <div className={classes.heading}>

                <div className={classes.categoryName}>Samsung Mobile Phones</div>
                <div className={classes.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>  

            </div>

        </>

    )
}
export default Productstore


