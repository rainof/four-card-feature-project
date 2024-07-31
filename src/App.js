import React from 'react';
import './App.scss';

import supervisorIcon from './assets/images/icon-supervisor.svg';
import teamBuilderIcon from './assets/images/icon-team-builder.svg';
import karmaIcon from './assets/images/icon-karma.svg';
import calculatorIcon from './assets/images/icon-calculator.svg';

function App({data}) {
  const {title, support, description, topics} = data;

  const image_files = [
    supervisorIcon,
    teamBuilderIcon,
    karmaIcon,
    calculatorIcon
  ];

  return (
    <div className="app">
      <header className="app_header">
        <h1>{title}</h1>
        <h1>{support}</h1>
        <p>{description}</p>
      </header>
      <section className="topic_box">
        {topics.map((topic, index) => (
          <div key={index} className={`sub_topic sub_topic-${index % image_files.length}`}>
            <div className="topic_name">{topic.name}</div>
            <p>{topic.description}</p>
            <img
              src={image_files[index % image_files.length]}
              alt={`icon-${index + 1}`}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
