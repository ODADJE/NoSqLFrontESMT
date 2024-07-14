import React from 'react';

function Drawer({ children }) {
  return (
    <label
      htmlFor="my-drawer"
      aria-label="close sidebar"
      className="drawer-overlay"
    >
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div className="drawer-side">
          <div className="menu pt-16 flex items-start justify-start w-80 min-h-full bg-base-200 text-base-content">
            {children}
          </div>
        </div>
      </div>
    </label>
  );
}

export default Drawer;
