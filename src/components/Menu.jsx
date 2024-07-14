import React from 'react';
import { FaTachometerAlt, FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const menuItems = [
  {
    menuName: 'Main menu',
    items: [
      {
        label: 'Dashboard',
        link: '/dashboard',
        icon: <FaTachometerAlt />,
      },
      {
        label: 'Users',
        link: '/dashboard/users',
        icon: <FaUserAlt />,
      },
    ],
  },
];

function Menu() {
  return (
    <div>
      <ul className="menu w-48 rounded-box">
        {menuItems.map((item) => (
          <li key={item.menuName}>
            <h2 className="menu-title text-xl">{item.menuName}</h2>
            <ul className="mt-2">
              {item.items.map((el) => (
                <li key={el?.label} className="text-lg m-2">
                  <NavLink end to={el?.link}>
                    <>{el?.icon}</>
                    {el?.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
