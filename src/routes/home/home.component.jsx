import React from 'react';
import { Outlet } from 'react-router-dom';

import { Directory } from '../../components/directory/directory.component';

export const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};
