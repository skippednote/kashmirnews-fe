import React from 'react';
import './index.css';

function NewsPaper({ source, newsItems }) {
  const newsList = newsItems.map(newsItem => (
    <li className="news-item" key={newsItem.id}>
      <h4 className="news-title">
        <a href={newsItem.url} className="news-link">
          {newsItem.title}
        </a>
      </h4>
      <hr className="hr" />
    </li>
  ));

  return (
    <section className="section">
      <h2>{source}</h2>
      <ul className="list">{newsList}</ul>
    </section>
  );
}

export default NewsPaper;
