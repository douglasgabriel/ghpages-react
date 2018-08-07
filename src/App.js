import React, { Component } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import ptLocaleData from 'react-intl/locale-data/pt';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { HomePage } from './pages/home/HomePage';

import { i18nConfig } from './i18n/i18nConfig';

addLocaleData(ptLocaleData);

class App extends Component {
  render() {
    return (
      <IntlProvider
        locale={i18nConfig.locale}
        messages={i18nConfig.messages}>
        <div className="App">
          <HomePage />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
