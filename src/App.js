import React, { useState, useEffect, useRef } from 'react';
import { commands } from './commands';
import Prompt from './components/Prompt';
import Output from './components/Output';

const App = () => {
  const [history, setHistory] = useState([
    { id: 0, command: null, output: commands.banner.execute() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isLoading]);

  const handleCommand = async (e) => {
    if (e.key !== 'Enter' || isLoading) return;

    const fullInput = input.trim();
    const [commandName, ...args] = fullInput.toLowerCase().split(' ');
    
    let output;
    let newHistoryEntry = { id: history.length, command: fullInput, output: null };
    
    setHistory(prev => [...prev, newHistoryEntry]);
    setInput('');

    if (commandName === 'clear') {
      setHistory([]);
      return;
    }
    
    setIsLoading(true);
    
    const command = commands[commandName];

    if (command) {
      try {
        // Pass the full commands object to 'help', and args to others
        const commandArgs = commandName === 'help' ? commands : args;
        output = await command.execute(commandArgs);
      } catch (error) {
        console.error("Command execution error:", error);
        output = <p className="error-color">An error occurred while executing the command.</p>;
      }
    } else if (commandName !== '') {
      output = <p className="error-color">Command not found: {commandName}. Type 'help' for a list of commands.</p>;
    }

    setHistory(prev => prev.map(item => item.id === newHistoryEntry.id ? { ...item, output } : item));
    setIsLoading(false);
  };

  return (
    <div 
        className="p-4 md:p-8 w-full h-screen bg-[#1a1b26] text-[#a9b1d6] font-mono"
        onClick={() => inputRef.current?.focus()}
    >
      <div ref={terminalRef} className="overflow-y-auto h-[calc(100%-4rem)]">
        {history.map(item => (
          <div key={item.id}>
            {item.command && <Prompt command={item.command} />}
            {item.output && <Output content={item.output} />}
          </div>
        ))}
        {isLoading && (
          <div className="output-color animate-pulse-fast">Thinking...</div>
        )}
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <label htmlFor="command-input" className="prompt-color flex-shrink-0">guest@desktop:~$</label>
        <input 
          type="text" 
          id="command-input"
          ref={inputRef}
          className="terminal-input flex-grow bg-transparent border-none p-0 focus:ring-0" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          disabled={isLoading}
          autoFocus
          autoComplete="off"
          placeholder={isLoading ? 'Waiting for AI...' : ''}
        />
      </div>
    </div>
  );
};

export default App;
    
