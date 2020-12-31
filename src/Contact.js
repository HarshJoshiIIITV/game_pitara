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
import './FAQ.css'
import Collapsible from 'react-collapsible';
import './Contact.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}
const Contact = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div style={{ background: 'rgb(17, 17, 17)' }} className="cus">
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
            <div className="Contact_sec mr-0">
                <Container id="contactform_home" className="contact_container">
                    <br />
                    <form autoComplete="nope" id="contact_abc"  >
                        <h2 style={{ textAlign: 'center', padding: '40px' }} data-v-359f1776="">Contact Us</h2>
                        <div class="form-group">
                            <label>Full name</label>
                            <input autoComplete="nope" pattern="[A-Za-z ]{1,32}" required type="text" class="form-control" name="name" placeholder="Enter your name" />
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <div class="form-group">
                                    <label>Mobile number</label>
                                    <PhoneInput
                                        international
                                        countryCallingCodeEditable={false}
                                        defaultCountry="AE"
                                        id="tele_1"
                                        placeholder="Enter Mobile number"
                                    />
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <div class="form-group">
                                    <label >Email ID</label>
                                    <input autoComplete="nope" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required type="email" class="form-control" name="email" placeholder="Enter Email ID " />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label >Message</label>
                            <textarea autoComplete="nope" required class="form-control" rows="6" name="message" placeholder="Write here"></textarea>
                        </div>
                        <h6 id="message_contact" style={{ color: 'green' }}></h6>
                        <h6 id="message_contact2" style={{ color: 'red' }}></h6>
                        <Button type="submit" className="btn">Submit</Button>
                    </form>
                </Container>
            </div>
        </div>
    )
}

export default Contact