import React from 'react';
import ReactDOM from 'react-dom';

require('dotenv').config();

import '../assets/stylesheets/application.scss';

import App from './components/app';

const Root = () => {
  return (
    <App />
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Root />, root);
}
