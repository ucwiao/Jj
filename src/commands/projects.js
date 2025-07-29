import React from 'react';

export const projects = {
  description: 'Shows some of my recent projects.',
  execute: () => (
    <ul className="output-color space-y-2">
      <li>
        <p><span className="command-color">Project One</span> - A brief description of this cool project.</p>
        <a href="#" className="link-color">[view-live]</a>
      </li>
      <li>
        <p><span className="command-color">This Terminal</span> - You're looking at it! Built with React & Tailwind.</p>
        <a href="#" target="_blank" rel="noopener noreferrer" className="link-color">[view-source]</a>
      </li>
    </ul>
  )
};
