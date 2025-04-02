import React, { useEffect } from 'react';

const LinkedInFeed = () => {
  useEffect(() => {
    // Wait until the script is loaded, and then initialize the widget
    if (window.Elfsight) {
      window.Elfsight.init();
    }
  }, []);

  return (
    <div
      className="elfsight-app-24c802da-3ea0-4fad-b5d4-3e16bccb0fa2"
      data-elfsight-app-lazy
    />
  );
};

export default LinkedInFeed;
