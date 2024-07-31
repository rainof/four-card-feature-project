import './App.scss';

function App({data}) {
  const {title, support, description, topics} = data;

  return (
    <div className="app">
      <header className="app_header">
        <h1>{title}</h1>
        <h1>{support}</h1>
        <p>{description}</p>
      </header>
      <section className="topic_box">
        {topics.map((topic) => (
          <div>
            <h3>{topic.name}</h3>
            <p>{topic.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
