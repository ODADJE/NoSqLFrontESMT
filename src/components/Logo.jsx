import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/dashboard">
      <h1 className="text-3xl font-bold ">
        User<span className="text-primary">Management</span>
      </h1>
    </Link>
  );
}

export default Logo;
