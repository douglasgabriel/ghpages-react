import React from 'react';
import { MenuLayout } from '../../layouts/menuLayout/MenuLayout';
import { MenuCard } from '../../components/menuCard/MenuCard';

import bgCard1 from '../../assets/images/card1-bg.JPG';
import bgCard2 from '../../assets/images/card2-bg.jpg';
import bgCard3 from '../../assets/images/card3-bg.JPG';
import bgCard4 from '../../assets/images/card4-bg.jpg';

import './homePage.css';

export class HomePage extends React.Component {
    render() {
        return (
            <MenuLayout>
                <MenuCard
                    size="3"
                    backgroundImage={bgCard1}
                    icon="ios-person-outline"
                    title="home.about.title"
                    subtitle="home.about.subtitle" />
                <MenuCard
                    size="3"
                    backgroundImage={bgCard2}
                    icon="ios-paper-outline"
                    title="home.resume.title"
                    subtitle="home.resume.subtitle" />
                <MenuCard
                    size="3"
                    backgroundImage={bgCard3}
                    icon="ios-briefcase-outline"
                    title="home.portfolio.title"
                    subtitle="home.portfolio.subtitle" />
                <MenuCard
                    size="3"
                    backgroundImage={bgCard4}
                    icon="ios-chatbubbles-outline"
                    title="home.blog.title"
                    subtitle="home.blog.subtitle" />
            </MenuLayout>
        )
    }
}