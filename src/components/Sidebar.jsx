import React from 'react';
import Menu from './Menu';
import GreetUser from './GreetUser';

function Sidebar() {
  const user = JSON.parse(localStorage.getItem('user-info'));
  return (
    <div className="hidden col-span-2 row-span-11 px-5 pt-5 xl:flex flex-col gap-10">
      <GreetUser name={user?.name} />
      <Menu />
    </div>
  );
}

export default Sidebar;
