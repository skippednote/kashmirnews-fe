import React from 'react';
import Message, { MSG_INFO } from '../Message';
import './index.css';

function NewsPaper({ source, sourceUrl, newsItems }) {
  const newsList = newsItems.map(newsItem => (
    <li className="news-item" key={newsItem.id}>
      <h4 className="news-title">
        <a
          href={newsItem.url}
          className="news-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {newsItem.title}
        </a>
      </h4>
      <hr className="hr" />
    </li>
  ));

  return (
    <section className="section">
      <h2>
        <a
          href={sourceUrl}
          className="news-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {source}
        </a>
      </h2>
      <div>
        {newsItems.length ? (
          <ul className="list">{newsList}</ul>
        ) : (
          <Message type={MSG_INFO}>No news found</Message>
        )}
      </div>
    </section>
  );
}

export default NewsPaper;
