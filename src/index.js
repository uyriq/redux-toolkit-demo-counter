/* eslint-disable indent */
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import store from './app/store'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    // Оборачиваем приложение компонентом Provider из пакета react-redux
    // eslint-disable-next-line react/jsx-filename-extension
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
