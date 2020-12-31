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

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}
const FAQ = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div style={{ background: 'rgb(17, 17, 17)' }} className="fq">
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
            <h2 style={{ textAlign: 'center', padding: '40px' }} data-v-359f1776="">FREQUENTLY ASKED QUESTIONS (FAQ)</h2>
            <div className="section_faq">
                <div className="card_faq">
                    <h3>GENERAL</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="What type of games does JeetWin offer?">
                                <p>JeetWin offers a wide range of world class gaming products. At JeetWin, you will find</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>

            </div>
            <div className="section_faq">
                <div className="card_faq">
                    <h3>GENERAL</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="What type of games does JeetWin offer?">
                                <p>JeetWin offers a wide range of world class gaming products. At JeetWin, you will find</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>
                <div className="card_faq">
                    <h3>Registration and Login</h3>
                    <ol>
                        <li>
                            <Collapsible trigger="Why JeetWin?">
                                <p>JeetWin is the leading online betting site in India which offers a wide range of world class gaming products to its players. As India’s most trusted brand, JeetWin’s player will receive</p>
                            </Collapsible>
                        </li>

                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible trigger="Start here">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </li>
                    </ol>

                </div>

            </div>
        </div>
    )
}

export default FAQ