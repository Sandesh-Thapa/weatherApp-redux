import React from  'react';
import { createRoot } from 'react-dom/client';
import reducer from './redux/reducer'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';

const middleware = [thunk]
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))
const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store} >
        <App />
    </Provider>
)