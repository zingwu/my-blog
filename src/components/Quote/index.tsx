import React, { FC } from 'react';

const DefaultContent = 'Any application that can be written in JavaScript, will eventually be written in JavaScript.';
const DefaultAuthor = "Atwood's Law";

interface IQuoteProps {
  content?: string;
  author?: string;
}

const Quote: FC<IQuoteProps> = ({ content = DefaultContent, author = DefaultAuthor }) => (
  <div className="card-demo" style={{ maxWidth: 800, margin: '30px auto' }}>
    <div className="card">
      <div className="card__body">
        {content}
      </div>
      <div className="card__footer" style={{ textAlign: 'right' }}>
        -
        {author}
      </div>
    </div>
  </div>
);

export default Quote;
