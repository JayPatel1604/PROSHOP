// import React from 'react'
// import ReactDOM from 'react-dom/client'
// //import { Provider } from 'react-redux'
// //import store from './store'
// import './bootstrap.min.css'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM.render( 
//   //<Provider store={store}>
//   <>
//       <App />
//   </>
    
//   //</Provider>
 
// )


//reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import './bootstrap.min.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  
    <Provider store={store}>
    <App />
    </Provider>,
  //</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();