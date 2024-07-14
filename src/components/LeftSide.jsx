import React from 'react';
import SearchInput from './SearchInput';
import Settings from './Settings';
import Profile from './Profile';

function LeftSide() {
  return (
    <div className="flex gap-4 items-center mx-auto md:mx-0 mb-3">
      <Settings />
      <Profile />
    </div>
  );
}

export default LeftSide;
