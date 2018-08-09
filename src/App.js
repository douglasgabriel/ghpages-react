import React, { Component } from 'react';

/** Style */
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

/** Pages */
import { HomePage } from './pages/home/HomePage';


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

        <HomePage />

      </IntlProvider>
    );
  }
}

export default App;
