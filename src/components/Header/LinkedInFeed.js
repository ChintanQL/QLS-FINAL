import React, { Component } from 'react';

class LinkedInFeed extends Component {
  componentDidMount() {
   
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;

   
    document.body.appendChild(script);

    
  }

  render() {
    return (
      <div
        className="elfsight-app-24c802da-3ea0-4fad-b5d4-3e16bccb0fa2"
        data-elfsight-app-lazy
      />
    );
  }
}

export default LinkedInFeed;
