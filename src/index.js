import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const target = document.getElementById('root')

render(
    <Provider store = {store}>
         <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    target
)

