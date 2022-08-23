import React from 'react';
import ConnectWallet from './ConnectWallet';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h4 className="">UD Search August</h4>
      <ConnectWallet />
    </div>
  );
};

export default Navbar;