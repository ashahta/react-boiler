import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './store';
import App from './components/App';
// import reset from './constants/css/reset';

const GlobalStyle = createGlobalStyle;

ReactDOM.render(
    <BrowserRouter>
        <>
            <Provider store={store}>
                <App />
            </Provider>
            <GlobalStyle />
        </>
    </BrowserRouter>
);