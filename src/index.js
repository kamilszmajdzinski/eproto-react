import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from './store'

const target = document.getElementById('root')

render(
    <Provider store = {store}>
        <App />
    </Provider>,
    target
)

