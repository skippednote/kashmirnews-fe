import React from 'react';
import './index.css';

export const MSG_ERROR = 'message-error';
export const MSG_INFO = 'message-info';

function Message({ type, children }) {
  return <div className={type}>{children}</div>;
}

export default Message;
