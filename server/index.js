// 参考: https://zenn.dev/b1essk/articles/ssr-with-react-express

// Train3.
 /*
const express = require('express');
const app = express();
const PORT = 9000;

// ルートにアクセスした際のレスポンス
app.get('/', (req, res) => {
  res.send('Hello world');
});

// サーバを起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Train3 ここまで.
// */



// Train5.
//import React from 'react';
//import ReactDOMServer from 'react-dom/server';
//import App from '../src/App.tsx';

// const express = require('express');
//import express from 'express'

//import path from 'path';

// /*

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');

const App = require('../src/App.tsx').default;

const app = express();
const PORT = 9003;

app.get('/', (req, res) => {
  // res.send('Hello world');
  const AppHTML = ReactDOMServer.renderToString(React.createElement(App, null)); // SSR
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>SSR</title>
    </head>
    <body>
      <div id="root">${AppHTML}</div>
      <script src="/static/bundle.js"></script>
    </body>
    </html>
  `;
  res.send(html);
});

// app.use(express.static("./build"));
app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Train5, ここまで.

// */