import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import MenuLayout from '../../layouts/menuLayout/MenuLayout';
import { MenuCard } from '../../components/menuCard/MenuCard';

import { AboutPage } from '../about/AboutPage';
import { ResumePage } from '../resume/ResumePage';
import { PortfolioPage } from '../portfolio/PortfolioPage';
import { BlogPage } from '../blog/BlogPage';

import bgCard1 from '../../assets/images/card1-bg.JPG';
import bgCard2 from '../../assets/images/card2-bg.jpg';
import bgCard3 from '../../assets/images/card3-bg.JPG';
import bgCard4 from '../../assets/images/card4-bg.jpg';

import './homePage.css';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    onRouteChange() {
        alert("mudou");
    }

    render() {
        return (
            <Router onChange={this.onRouteChange}>
                <div className="App">
                    <MenuLayout>
                        <nav>
                            <NavLink activeClassName='is-active' to="/about">
                                <MenuCard
                                    size="3"
                                    backgroundImage={bgCard1}
                                    icon="ios-person-outline"
                                    title="home.about.title"
                                    subtitle="home.about.subtitle" />
                            </NavLink>
                            <NavLink activeClassName='is-active' to="/resume">
                                <MenuCard
                                    size="3"
                                    backgroundImage={bgCard2}
                                    icon="ios-paper-outline"
                                    title="home.resume.title"
                                    subtitle="home.resume.subtitle" />
                            </NavLink>
                            <NavLink activeClassName='is-active' to="/portfolio">
                                <MenuCard
                                    size="3"
                                    backgroundImage={bgCard3}
                                    icon="ios-briefcase-outline"
                                    title="home.portfolio.title"
                                    subtitle="home.portfolio.subtitle" />
                            </NavLink>
                            <NavLink activeClassName='is-active' to="/blog">
                                <MenuCard
                                    size="3"
                                    backgroundImage={bgCard4}
                                    icon="ios-chatbubbles-outline"
                                    title="home.blog.title"
                                    subtitle="home.blog.subtitle" />
                            </NavLink>
                        </nav>

                        <main>
                            <Route path="/about" component={AboutPage} />
                            <Route path="/resume" component={ResumePage} />
                            <Route path="/portfolio" component={PortfolioPage} />
                            <Route path="/blog" component={BlogPage} />
                        </main>
                    </MenuLayout>
                </div>
            </Router>
        )
    }
}