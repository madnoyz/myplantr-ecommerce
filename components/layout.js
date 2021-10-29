import React from 'react';
import Head from 'next/head';
import {AppBar, Toolbar, Typography, Container} from '@material-ui/core'
import useStyles from "../utils/styles";

function Layout({children}) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>PLANTOPIA</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography>PLANTOPIA</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography>
                    All rights reserved. Plantopia &copy; 2021.
                </Typography>
            </footer>
        </div>
    );
}

export default Layout;
