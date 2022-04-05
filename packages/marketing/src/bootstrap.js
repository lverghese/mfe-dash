import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start up the app
// onNavigate is the key inside of the callback function argument
const mount = (el, { onNavigate, defaultHistory }) => {

  //if we provided a default history, use it, if not, use memory
  // || means 'or'
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }
  //the history object has an event listener tied to it 
  //called 'listen
  //whenever some navigation occurs, this history object
  // is going to call any function that we provided to this listen


  ReactDOM.render(<App history={history} />, el);

  return {
    //inside of here, we are going to place some number of functions
    //that our container project can call to somehow change or update
    //our marketing app

    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
