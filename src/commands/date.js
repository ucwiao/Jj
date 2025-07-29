import React from 'react';

export const date = {
  description: 'Shows the current date and time.',
  execute: () => <p className="output-color">{new Date().toString()}</p>
};

