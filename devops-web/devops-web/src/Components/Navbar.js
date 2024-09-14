import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#foundational-knowledge">Foundational Knowledge</a></li>
        <li><a href="#automation-ci-cd">Automation & CI/CD</a></li>
        <li><a href="#cloud-infrastructure">Cloud & Infrastructure</a></li>
        <li><a href="#monitoring-collaboration">Monitoring & Collaboration</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
