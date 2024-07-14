import React from 'react';
import Logo from './Logo';
import Tab from './Tab';
import LeftSide from './LeftSide';
import Drawer from './Drawer';
import HamburgerButton from './HamburgerButton';

function Header() {
  return (
    <div className="col-span-12 row-span-1 min-h-[5rem]  flex gap-3 flex-wrap items-center px-5 justify-between ">
      <HamburgerButton />
      <Logo />
      {/* <Tab items={['Market', 'Wallet', 'Tools']} /> */}
      <LeftSide />
    </div>
  );
}

export default Header;
