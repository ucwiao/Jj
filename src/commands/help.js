import React from 'react';

export const help = {
  description: 'Shows a list of all available commands.',
  execute: (allCommands) => (
    <div className="output-color">
      <p>Available commands:</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1 mt-2">
        {Object.keys(allCommands).sort().map(cmd => (
          <li key={cmd}>
            <span className="command-color">{cmd.padEnd(10, ' ')}</span>
            <span className="hidden md:inline">- {allCommands[cmd].description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
};
