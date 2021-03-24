import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <Link
      className={`${
        match
          ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
      }`}
      to={to}
    >
      {label}
    </Link>
  );
};

export default MenuLink;
