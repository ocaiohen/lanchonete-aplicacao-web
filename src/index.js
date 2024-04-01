import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRoutes from "./routes.js"
import GlobalStyles from "./globalStyles.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoutes /> <GlobalStyles/>
  </React.StrictMode>
);
