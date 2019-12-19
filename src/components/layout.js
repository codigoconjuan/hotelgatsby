import React from 'react';
import Header from './header';
import Helmet from 'react-helmet';

const Layout = (props) => {
    return ( 
        <>
            <Helmet>
                <title>Gatsby Hotel</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
                <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap" rel="stylesheet" />
            </Helmet>

            <Header />
            {props.children}
        </>
     );
}
 
export default Layout;