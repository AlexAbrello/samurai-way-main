import React from 'react';

export type MessageType = {
  id: number
  text: string
}

const Message = ({text}: MessageType) => {
  return (
      <div>
        {text}
      </div>
  );
};

export default Message;