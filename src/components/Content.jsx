import React from 'react';

function Content({ children }) {
  return (
    <div className="relative row-span-11 col-span-full xl:col-span-10 bg-base-300 xl:rounded-ss-lg p-5 min-h-full overflow-scroll no-scrollbar">
      {children}
    </div>
  );
}

export default Content;
