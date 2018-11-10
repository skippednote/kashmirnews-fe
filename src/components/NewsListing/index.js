import React, { Suspense } from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import 'unfetch/polyfill';
import Message, { MSG_INFO } from '../Message';
import NewsPaper from '../NewsPaper';
import './index.css';

const NewsResource = createResource(() =>
  fetch(`${process.env.REACT_APP_BASE_URL}/news`).then(response =>
    response.json()
  )
);

const NewsComponent = () => {
  const newsListData = NewsResource.read();
  const newsList = newsListData.map(news => (
    <NewsPaper key={news.source} {...news} />
  ));
  return newsListData.length ? (
    <div className="wrapper">{newsList}</div>
  ) : (
    <Message type={MSG_INFO}>Come back later. Processing!</Message>
  );
};

function NewsListing() {
  return (
    <Suspense fallback={<Message type={MSG_INFO}>Loading News...</Message>}>
      <NewsComponent />
    </Suspense>
  );
}

export default NewsListing;
