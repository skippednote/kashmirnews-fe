import React, { StrictMode } from 'react';
import NewsListing from './components/NewsListing';
import ErrorBoundary from './components/ErrorBoundry';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <StrictMode>
      <Header />
      <ErrorBoundary>
        <NewsListing />
      </ErrorBoundary>
      <Footer />
    </StrictMode>
  );
}

export default App;
