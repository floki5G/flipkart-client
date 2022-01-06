import React from 'react'
import Layout from '../../component/Layout';
import getparam from '../../api/utils/getparam';

import Productstore from './productstore';
import Productpage from "./productpage"
import Productmaincategory from './productmaincategory';
import Productfilter from './productfilter';
export default function productlist(props) {
    const renderProduct = () => {
        const params = getparam(props.location.search);
        let content = null;
        switch (params.pagetype) {
            case "store":
                content = <Productstore {...props} />;
                break;
            case "page":
                content = <Productpage {...props} />;
                break;
            case "mainpage":
                content = <Productmaincategory {...props} />;
                break;
            case "filterpage":
                content = <Productfilter {...props} />;
                break;
        }

        return content;
    };

    return <Layout>{renderProduct()}</Layout>;
};
