import React from 'react';
import className from 'classnames';
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
        <h1 className="header_title">{title}</h1>
        <h1 className="header_support">{support}</h1>
        <p className="header_description">{description}</p>
      </header>
      <section className="topic_box">
        {topics.map((topic, index) => (
          <div key={index} className={className(`sub_topic sub_topic-${index % image_files.length}`)}>
            <div className="topic_name merge_1_2">{topic.name}</div>
            <p className="topic_description merge_3_4">{topic.description}</p>
            <div></div>
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
