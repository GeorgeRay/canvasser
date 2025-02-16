// replace this file with temp_paused_index.js if you want to use the old version of Canvasser.

import Head from "next/head";
import React, { useState, useEffect } from "react";

import {
    Container,
    createTheme,
    ThemeProvider,
    CssBaseline,
} from "@material-ui/core";




// import styles from '../styles/Index.module.css'

export default function Index() {
    const [darkMode, setDarkMode] = useState(true);
    const [authorized, setAuthorized] = useState(false);
    const [canvasUrl, setCanvasUrl] = useState();
    const [apiKey, setApiKey] = useState();
    const [subTotal, setSubTotal] = useState();
    const [notifications, setNotifications] = useState(false);
    const [error, setError] = useState(false);



    // https://material.io/design/color/the-color-system.html#tools-for-picking-colors
    // https://material-ui.com/customization/color/#playground
    // https://imagecolorpicker.com/
    // https://hexcolor.co/
    const theme = createTheme({
        palette: darkMode
            ? {
                type: "dark",
                primary: {
                    main: "#383434",
                },
                secondary: {
                    main: "#68a7de",
                },

            }
            : {
                type: "light",
                secondary: {
                    main: "#68a7de",
                },
            },
    });

    // may change Container to Box when working on nav
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <title>Canvasser{subTotal ? ` (${subTotal})` : ""}</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </Head>
            <CssBaseline />
  


            <main style={{ marginLeft: "30px" }}>
                <h1>Updated Version Available</h1>
                <p>This was a copy of Canvasser created by Chris McCauley. <a href="https://canvasser.vercel.app/" style={{ color: "#FFFF00" }}>https://canvasser.vercel.app/</a></p>
                <p>Please use the updated version at the link above.</p>
            </main>  

        </ThemeProvider>
    );
}