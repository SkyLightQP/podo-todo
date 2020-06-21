import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './views/App';

import './css/color.css';
import './css/global.css';
import { TodoContext } from './hooks/useTodo';

ReactDOM.render(
    <React.StrictMode>
        <TodoContext>
            <App />
        </TodoContext>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
