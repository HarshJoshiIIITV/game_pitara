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
import Tool_bar from './Tool_bar'
import IconButton from "@material-ui/core/IconButton";
import { Home as HomeIcon } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./App.css";
import Footer from "./Footer";
import logo from "./logo.png";
import casino from "./download.jpeg";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    whiteText: {
        color: "white",
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={0}>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const grids = [1, 2, 3, 4, 5, 6, 7, 8];
    const grids2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: "#111" }}>
                <Tool_bar />
            </AppBar>

            <AppBar position="static" style={{ backgroundColor: "#1a1a1a" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                >
                    <Tab label={<HomeIcon />} {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} dir={theme.direction}>
                <Carousel
                    autoPlay
                    showThumbs={false}
                    stopOnHover
                    swipeable
                    dynamicHeight
                    emulateTouch
                    infiniteLoop
                    showStatus={false}
                    showArrows={false}
                    interval={2000}
                    swipeScrollTolerance={3}
                    centerMode
                    centerSlidePercentage={120}
                >
                    <div>
                        <img
                            src="https://download.ocms365.com/v2/JW/PictureLanguage.408.3?version=0"
                            alt="img1"
                        />
                    </div>
                    <div>
                        <img
                            src="https://download.ocms365.com/v2/JW/PictureLanguage.404.3?version=0"
                            alt="img1"
                        />
                    </div>
                    <div>
                        <img
                            src="https://download.ocms365.com/v2/JW/PictureLanguage.418.3?version=0"
                            alt="img1"
                        />
                    </div>
                </Carousel>
                {/* <Typography variant="h3" align="center" className={classes.whiteText}>
            Game-Pitara Top Games
          </Typography> */}
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        className="content"
                        style={{ padding: "8px" }}
                    >
                        <div className="content-overlay"></div>
                        <img
                            src={casino}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                        <div className="content-details fadeIn-top">
                            <h3>Comming Soon...</h3>
                            <p>Keep checking </p>
                            <Button
                                variant="contained"
                                style={{ margin: 10 }}
                                onClick={() => setValue(1)}
                            >
                                View ALL
                </Button>
                        </div>
                    </Grid>
                    <Grid container xs={12} sm={8}>
                        {grids.map((g) => (
                            <Grid
                                item
                                xs={6}
                                sm={3}
                                style={{ padding: "8px" }}
                                className="content"
                                key={g}
                            >
                                <div className="content-overlay"></div>
                                <img
                                    src={casino}
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                                <div className="content-details fadeIn-top">
                                    <h3>Coming Soon...</h3>
                                    <p>Keep checking </p>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container xs={12} sm={8}>
                        {grids.map((g) => (
                            <Grid
                                item
                                xs={6}
                                sm={3}
                                style={{ padding: "8px" }}
                                className="content"
                                key={g}
                            >
                                <div className="content-overlay"></div>
                                <img
                                    src={casino}
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                                <div className="content-details fadeIn-top">
                                    <h3>Coming Soon...</h3>
                                    <p>Keep checking </p>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        className="content"
                        style={{ padding: "8px" }}
                    >
                        <div className="content-overlay"></div>
                        <img
                            src={casino}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                        <div className="content-details fadeIn-top">
                            <h3>Coming Soon...</h3>
                            <p>Keep checking </p>
                        </div>
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <img
                    src="https://download.ocms365.com/pn/jw/prod/poster-background/1/1597292172269.jpg"
                    width="100%"
                />
                <Grid container>
                    {grids2.map((g) => (
                        <Grid
                            item
                            xs={6}
                            sm={2}
                            className="content"
                            style={{ padding: "8px" }}
                        >
                            <div className="content-overlay"></div>
                            <img
                                src={casino}
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                            />
                            <div className="content-details fadeIn-top">
                                <h3>Coming Soon...</h3>
                                <p>Keep checking </p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <Typography className={classes.whiteText}>Page 3</Typography>
            </TabPanel>
        </div>
    );
};

export default Home;
