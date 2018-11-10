import React from 'react';
import NewsListing from './components/NewsListing';
import ErrorBoundary from './components/ErrorBoundry';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <NewsListing />
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;
