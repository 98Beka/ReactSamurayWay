import './index.css';
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App appState={state} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>
  );
}

store.subscribe(rerenderEntireTree);

store.rerenderEntireTree(store.getState());