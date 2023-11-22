/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license.
 * https://github.com/facebook/docusaurus/blob/main/LICENSE
 * 
 * MIT License
 * 
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * Original Code :
 * https://github.com/facebook/docusaurus/blob/187e5aa218e764b06dcbbb50f22ced72159a8532/website/src/components/BrowserWindow/IframeWindow.tsx
 */

import React from 'react';

import BrowserWindow from './index';

// Quick and dirty component, to improve later if needed
export default function IframeWindow({url}: {url: string}): JSX.Element {
  return (
    <div style={{padding: 10}}>
      <BrowserWindow
        url={url}
        style={{
          minWidth: 'min(100%,45vw)',
          width: 800,
          maxWidth: '100%',
          overflow: 'hidden',
        }}
        bodyStyle={{padding: 0}}>
        <iframe
          src={url}
          title={url}
          style={{display: 'block', width: '100%', height: 300}}
        />
      </BrowserWindow>
    </div>
  );
}
