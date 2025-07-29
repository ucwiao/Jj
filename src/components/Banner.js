import React from 'react';

const Banner = () => (
  <div>
    {/* The template literal starts with the backtick ` on the next line */}
    <pre className="output-color text-xs md:text-base">
{`███╗░░░███╗██╗░██████╗░░█████╗░██████╗░░█████╗░
████╗░████║██║██╔════╝░██╔══██╗██╔══██╗██╔══██╗
██╔████╔██║██║██║░░██╗░███████║██████╔╝██║░░██║
██║╚██╔╝██║██║██║░░╚██╗██╔══██║██╔══██╗██║░░██║
██║░╚═╝░██║██║╚██████╔╝██║░░██║██║░░██║╚█████╔╝
╚═╝░░░░░╚═╝╚═╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░

██████╗░██╗░░░██╗
╚════██╗██║░░░██║
░░███╔═╝╚██╗░██╔╝
██╔══╝░░░╚████╔╝░
███████╗░░╚██╔╝░░
╚══════╝░░░╚═╝░░░`}
{/* The template literal is closed with the backtick ` right above this comment */}
    </pre>
    <div className="output-color mt-4">Welcome to my interactive terminal.</div>
    <div className="output-color">Type <span className="command-color">'help'</span> to see a list of available commands.</div>
  </div>
);

export default Banner;
