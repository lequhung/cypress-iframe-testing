'use client';

import React from 'react';

interface Props {
  mode: 'test' | 'prod' | 'mock';
}

export default function IFrameLib<Props>({ mode }) {
    React.useLayoutEffect(() => {
      let src = '';

      switch (mode) {
        case 'prod':
          src = 'some prod url';
          break;
        case 'mock':
          src = 'http://localhost:3030/index.js';
          break;
        default:
          src = 'some test url';
          break;
      };

      const script = document.createElement( 'script' );
      script.setAttribute( 'src', src);
      script.onload = () => {
        console.log('iframe loaded successfully!');
      };
      document.body.appendChild(script);
    }, []);

    return (
      <div id="iframe-testing"></div>
    )
  }