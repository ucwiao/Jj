import React from 'react';

const Prompt = ({ command }) => (
  <div className="flex items-center space-x-2">
    <div className="prompt-color flex-shrink-0">guest@desktop:~$</div>
    <div className="output-color">{command}</div>
  </div>
);

export default Prompt;
