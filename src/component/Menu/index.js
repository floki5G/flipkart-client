import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Typography, Button, makeStyles, Grid } from '@material-ui/core'

import { useSelector, useDispatch } from "react-redux"
import { _categorylist } from "../../api/api.url"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { color, margin } from '@mui/system';

const useStyle = makeStyles({
    menuHeader: {
        width: "100%",
        height: "40px",
        background: "#fff",
        borderBottom: "1px solid #cecece",
        boxShadow: "0 2px 2px -2px #333",

        "& ul": {
            listStyle: "none",
            margin: "0",
            padding: "0",
        },


        "& > ul": {
            display: "flex",
            margin: "0 20vh",
        },
        "& > ul > li >span": {
            display: "block",
            lineHeight: " 40px",
            cursor: "pointer",
            padding: "0 20px",
            fontSize: " 14px",

        },
        "& > ul > li > span:hover": {
            color: "#2874f0"
        },

        "& > ul > li > ul": {
            position: " absolute",
            background: " #fff",
            left: " 0",
            right: " 0",
            display: " none",
            border: " 1px solid #cecece",
            zIndex: " 1",
            height: "78%",
            margin: "0px 20vh",

        },
        "& > ul > li:hover ul": {

            display: "block"
        },
        "& > ul > li > ul > li": {
            margin: " 0 20px",
            minWidth: " 150px",
        },
        "& > ul > li > ul > li": {
            float: " left",
            marginLeft: "13px"
        },
        "& > ul > li > ul > li > a": {
            fontWeight: " bold",
            display: " block",
            color: "black"

        },
        "& > ul > li > ul > li a": {
            padding: " 3px 0",
            display: " block",
            fontSize: " 15px",
            textDecoration: " none",
            // color: " #707070",
        },
        "& > ul > li > ul > li > ul": {
            marginLeft: "5px",
            textDecoration: " none",
            "& >li> a": {
                color: " #707070",
            }
        }
    }

})


export const Menu = () => {
    const [hover, setHover] = useState(false)

    const classes = useStyle()

    const selector = useSelector(state => state.getallcategory)

    const onMouseOver = () => {
        setHover(true)
    }

    const onMouseOut = () => {
        setHover(false)

    }
    const arrowicon = (props) => {
        return props
    }
    const handelcategory = (event) => {

        let myCategories = [];
        for (let category of event) {
          
            myCategories.push(

                <li key={category.name}>
                    {
                        category.parentId !== "undefined" ? <a href={`/${category.slug}?cid=${category._id}&parentid=${category.parentId}&pagetype=${category.pagetype}`}>
                            {category.name}
                        </a> : <span>{category.name}</span>
                    }
                    {category.children.length > 0 ? (<ul>{handelcategory(category.children)}</ul>) : null}
                </li>
            );
        }
        return myCategories;

    }



    return (
        <>
            <div className={classes.menuHeader}>
                <ul>
                    {selector.categories.length > 0 ? handelcategory(selector.categories) : null}
                </ul>
            </div>
        </>
    )
}
