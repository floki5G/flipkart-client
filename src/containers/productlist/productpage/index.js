import React, { useEffect } from 'react'
import getparam from '../../../api/utils/getparam';
import { useSelector, useDispatch } from 'react-redux'
import { getnewpagebycategory } from '../../../actions/newpage';
const Productpage = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const params = getparam(props.location.search)
        console.log({ params });
        const payload = {
            params
        }
        dispatch(getnewpagebycategory(payload))
    }, [])


    return (
        <>
            <div>
                product page
            </div>
        </>

    )
}
export default Productpage