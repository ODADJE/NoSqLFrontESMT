import React from 'react';

function Tab({ items }) {
  return (
    <div className="hidden lg:flex gap-2">
      {items.map((item, key) => (
        <TabItem key={key} label={item} />
      ))}
    </div>
  );
}

function TabItem({ label }) {
  return (
    <button className="btn btn-sm  btn-neutral rounded-full">{label}</button>
  );
}

export default Tab;
