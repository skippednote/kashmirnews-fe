import React, { Component } from 'react';
import Message, { MSG_ERROR } from '../Message';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Message type={MSG_ERROR}>
          Something went wrong! Try again later.
        </Message>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
