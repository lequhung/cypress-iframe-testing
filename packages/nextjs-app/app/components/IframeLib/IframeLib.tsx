'use client';

import React from 'react';

interface Props {
  mode: 'test' | 'prod' | 'mock';
}

// a component that injects a script which loads an iframe
export default function IFrameLib<Props>({ mode }) {
  React.useLayoutEffect(() => {
    const script = document.createElement( 'script' );

    script.setAttribute( 'src', getScriptUrl(mode));
    script.onload = () => {
      console.log('iframe loaded successfully!');
    };
    
    document.body.appendChild(script);
  }, []);

  return (
    <div id="iframe-testing"></div>
  )
}

function getScriptUrl(mode) {
  switch (mode) {
    case 'prod':
      return 'some prod url';
    case 'mock':
      return 'http://localhost:3030/index.js';
    default:
      return 'some test url';
  };
};