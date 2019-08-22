import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './pages/common/ErrorBoundary/ErrorBoundary';
import App from './App';
import store from './store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    (
        <ErrorBoundary>
            <Provider store={store}>
                <App />
            </Provider>
         </ErrorBoundary> 
    ), 
    document.getElementById('app-root')
);

serviceWorker.unregister();
