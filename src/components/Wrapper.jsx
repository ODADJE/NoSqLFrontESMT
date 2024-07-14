import React from 'react';

function Wrapper({ children }) {
  return (
    <div className="min-h-screen w-screen grid grid-cols-12 grid-rows-12 overflow-scroll no-scrollbar">
      {children}
    </div>
  );
}

export default Wrapper;
