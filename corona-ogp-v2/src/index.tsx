import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MetaTags from 'react-meta-tags';

const MyMetaTags = () =>
  <MetaTags>
    <title>東京の新型コロナ感染者数</title>
    <meta property="og:title" content="東京の感染者数" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="foo foo foo" />
    <meta property="og:url" content="http://tokyo-corona-digest.yuchiki.net/" />
  </MetaTags>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyMetaTags />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
