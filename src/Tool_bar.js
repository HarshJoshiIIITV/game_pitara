import React, { Component } from 'react'
import {
    AppBar,
    Box,
    Grid,
    makeStyles,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useTheme,
    Button,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Home as HomeIcon } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./App.css";
import Footer from "./Footer";
import logo from "./logo.png";
import Sidebar from "react-sidebar";
import { BrowserRouter, Route, Link } from "react-router-dom";


class Tool_bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <div className="toolbar_new">
                <Sidebar
                    sidebar={<div style={{ width: '300px', color: 'white', padding: '20px' }}>
                        <img src={logo} width='270px' height='50px' />
                        <Link to="/about_us" className="link">ABOUT US</Link>
                        <Link to="/tandc" className="link">TERMS AND CONDITIONS</Link>
                        <Link to="/privacy_policy" className="link">PRIVACY POLICY</Link>
                        <Link to="/faq" className="link">FAQ</Link>
                        <Link to="/contact_us" className="link">CONTACT US</Link>
                    </div>}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    pullRight="true"
                    styles={{ sidebar: { background: "#1a1a1a" } }}
                ></Sidebar>
                <Toolbar>
                    <Typography variant="h6">
                        <a href="/"><img src={logo} height={50} alt=" logo" /></a>
                    </Typography>
                    <IconButton
                        edge="start"
                        style={{ position: 'absolute', right: '0px' }}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon onClick={() => this.onSetSidebarOpen(true)} />
                    </IconButton>
                </Toolbar>
            </div>

        )

    }
}
export default Tool_bar