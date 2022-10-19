import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import Home from './Home';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* Wrapper for recoil state controller */}
    <RecoilRoot>
      {/* Fallback while async selectors are loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* TODO: remove when adding home */}
        <Home />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
