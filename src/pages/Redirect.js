import React from 'react';
import { Redirect } from '@docusaurus/router';

const RedirectToLandingPage = () => {
  return <Redirect to="/docs/intro.md" />; // Adjust the path to your landing page
};

export default RedirectToLandingPage;
