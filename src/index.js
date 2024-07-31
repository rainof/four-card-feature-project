import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appData = {
  title: "Reliable, efficient delivery",
  support: "Powered by Technology",
  description: "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful",
  topics: [
    {
      name: "Supervisor",
      description: "Monitors activity to identify project roadblocks"
    }, {
      name: "Team Builder",
      description: "Scans our talent network to create the optimal team for your project"
    }, {
      name: "Karma",
      description: "Regularly evaluates our talent to ensure quality"
    }, {
      name: "Calculator",
      description: "Uses data from past projects to provide better delivery estimates"
    }
  ]
};

root.render(
  <React.StrictMode>
    <App data={appData} />
  </React.StrictMode>
);

reportWebVitals();
