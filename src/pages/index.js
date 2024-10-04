import React from 'react';
import { Redirect } from '@docusaurus/router';

const Homepage = () => {
  return <Redirect to="/docs/intro.md" />; // Redirect to your desired docs page
};

export default Homepage;
