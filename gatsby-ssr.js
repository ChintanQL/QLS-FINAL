import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="elfsight-script"
      src="https://static.elfsight.com/platform/platform.js"
      async
    />,
  ]);
