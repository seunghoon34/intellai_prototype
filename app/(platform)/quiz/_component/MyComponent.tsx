import React from 'react';

const MyComponent = ({ paragraphs }:{paragraphs:string}) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: paragraphs }} />
  );
};

export default MyComponent;
