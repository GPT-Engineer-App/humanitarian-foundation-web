import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-sm breadcrumbs p-4" aria-label="Breadcrumb">
      <ul>
        <li><Link to="/">Home</Link></li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li key={name}>{name}</li>
          ) : (
            <li key={name}><Link to={routeTo}>{name}</Link></li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;