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
  const newsList = NewsResource.read();
  return (
    <div className="wrapper">
      {newsList.length &&
        newsList.map(news => <NewsPaper key={news.source} {...news} />)}
    </div>
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
