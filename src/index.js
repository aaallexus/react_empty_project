import React from 'react'
import {render} from 'react-dom'
import {Route} from 'react-router'
import { createStore, applyMiddleware,compose} from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import {client} from './axios'

import axiosMiddleware from 'redux-axios-middleware'

import createRootReducer from './reducers'

import './assets/css/index.css'
import App from './components/App'

const history = createBrowserHistory({basename:process.env.PUBLIC_URL})
//const history = createHashHistory()
//const history = createMemoryHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(axiosMiddleware(client))),
);

let container = null;
container = document.createElement("div");
container.setAttribute("id","root");
document.body.appendChild(container);
render(
    <Provider store={store}>
        <ConnectedRouter  history={history}>
            <App>
            </App>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
// <Route exact path="/" component={Dashboard}/>
//    render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
//
