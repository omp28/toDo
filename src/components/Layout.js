// components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-black text-white h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default Layout;
