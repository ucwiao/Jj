import React from 'react';

export const socials = {
  description: 'Lists my social media profiles.',
  execute: () => (
    <ul className="output-color">
      <li>
        <span className="command-color">github</span><span className="mx-2">-</span>
        <a href="https://github.com/nigga" target="_blank" rel="noopener noreferrer" className="link-color">github.com</a>
      </li>
      <li>
        <span className="command-color">Discord</span><span className="mx-2">-</span>
        <a href="https://discord.gg/MMfnpcW9" target="_blank" rel="noopener noreferrer" className="link-color">Discord</a>
      </li>
    </ul>
  )
};
    
