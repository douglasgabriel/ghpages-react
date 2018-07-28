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
                    title="About"
                    subtitle="Somethings about me" />
                <MenuCard
                    size="3"
                    backgroundImage={bgCard2}
                    icon="ios-paper-outline"
                    title="Resume"
                    subtitle="My professional skills" />
                <MenuCard
                    size="3"
                    backgroundImage={bgCard3}
                    icon="ios-briefcase-outline"
                    title="Portfolio"
                    subtitle="My projects" />
                <MenuCard
                    size="3"
                    backgroundImage={bgCard4}
                    icon="ios-chatbubbles-outline"
                    title="Blog"
                    subtitle="Systems and life things analist" />
            </MenuLayout>
        )
    }

}