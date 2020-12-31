import React, { useState } from 'react'
import pic from './aboutus_back.jpg'
import { Row, Col, Container } from 'react-bootstrap'
import { Home as HomeIcon } from "@material-ui/icons";
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


function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}
const About_us = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div style={{ background: 'rgb(17, 17, 17)' }} className="aboutus_page">
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


            <div className="image_aboutus">
                <img src={pic} />

            </div>
            <Container>
                <br />
                <br />
                <div style={{ textAlign: 'center' }}>
                    <h4>#1 Online Gambling Casino in India</h4>
                    <p className="first_p_aboutus">JeetWin is home to the best online casino, sports betting and entertainment games in India. We offer an impressive variety of games like Baccarat, Roulette, Andar Bahar, Fan Tan, Sic Bo and Dragon Tiger with professional live dealers. Enjoy our selected range of slots games and live bets on our huge selection of worldwide sports events. From the moment you sign up to JeetWin, you will be treated to a generous sign up bonus. No deposit is required! We also offer the best variety of promotions and unlimited cash back.
JeetWin is all about entertainment and having fun in a safe and responsible gaming environment. Should you have any query or questions, our highly trained Customer Service is available 24/7 to assist you.</p>
                </div>
                <br />
                <Row>
                    <Col md={6} xs={12} sm={12}>
                        <h4>Our Values</h4>
                        <p>At JeetWin, we believe that online gambling should be a fun and exciting form of entertainment. We are committed to creating a safe and enjoyable environment for our valued players.
                        It is also understandable that first time players will be concerned about the issue of fairness. We can assure that all our games are fair all the time by using a certified and audited Random Number Generator (RNG). Our software has been extensively tested and outcomes are guaranteed random without giving unfair advantages to any parties.
                        JeetWin does its upmost to ensure all players information stays confidential and secure at all time. We make sure all security measures are in placed to ensure every transaction through our software are 100% secure. Furthermore, we promise to never pass players details onto a third party.
All players of JeetWin are required to declare that they are of a legal age and we forbid anybody under the age of 18 to play at JeetWin. We also have zero tolerance towards fraud or any kind of fraudulent activities in which may result to immediate account closure and forfeiture of any winnings.</p>
                    </Col>
                    <Col md={6} xs={12} sm={12}>
                        <h4>Our History</h4>
                        <p>JeetWin has a long history of providing excellent gaming experience to our players. Our team of experts has spent a long time building what we consider the best online casino experience in India. Prior to this, the team has already a long legacy of providing online gambling services across the world.</p>

                        <p> JeetWin went live in 2017 and started out with a few games in the beginning. From a humble start, JeetWin has now grown to become the #1 online gambling casino in India. JeetWin has it all whether it’s a traditional card game or modern interactive slot game.
JeetWin has a solid reputation and will continue to build its name. We aim to bring the best available products in the market to India and as reflected in our brand name JeetWin – Win & Win. So, Keep Playing and Keep Winning!</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default About_us