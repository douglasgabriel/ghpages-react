import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/** Style */
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

/** Pages */
import { HomePage } from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { ResumePage } from './pages/resume/ResumePage';
import { PortfolioPage } from './pages/portfolio/PortfolioPage';
import { BlogPage } from './pages/blog/BlogPage';

/** i18n */
import { addLocaleData, IntlProvider } from 'react-intl';
import ptLocaleData from 'react-intl/locale-data/pt';
import { i18nConfig } from './i18n/i18nConfig';

addLocaleData(ptLocaleData);

class App extends Component {
  render() {
    return (
      <IntlProvider
        locale={i18nConfig.locale}
        messages={i18nConfig.messages}>

        <Router>

          <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/resume" component={ResumePage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/blog" component={BlogPage} />
          </div>

        </Router>

      </IntlProvider>
    );
  }
}

export default App;
