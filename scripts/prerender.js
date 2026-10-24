import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToString } from 'react-dom/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function prerender() {
  const distIndexPath = path.join(rootDir, 'dist', 'index.html');
  const ssrAppPath = path.join(rootDir, 'dist-ssr', 'App.js');

  if (!fs.existsSync(distIndexPath)) {
    console.warn('[Prerender] dist/index.html not found, skipping prerender.');
    return;
  }

  if (!fs.existsSync(ssrAppPath)) {
    console.warn('[Prerender] dist-ssr/App.js not found, skipping prerender.');
    return;
  }

  try {
    const { default: App } = await import(ssrAppPath);
    const appHtml = renderToString(React.createElement(App));

    let indexHtml = fs.readFileSync(distIndexPath, 'utf8');

    // Replace <div id="root"></div> with the server-rendered HTML markup
    const rootPlaceholder = '<div id="root"></div>';
    if (indexHtml.includes(rootPlaceholder)) {
      indexHtml = indexHtml.replace(rootPlaceholder, `<div id="root">${appHtml}</div>`);
      fs.writeFileSync(distIndexPath, indexHtml, 'utf8');
      console.log(`[Prerender] Successfully injected pre-rendered HTML (${appHtml.length} chars) into dist/index.html`);
    } else {
      console.warn('[Prerender] Could not locate <div id="root"></div> in dist/index.html');
    }

    // Clean up temporary dist-ssr directory
    const distSsrDir = path.join(rootDir, 'dist-ssr');
    if (fs.existsSync(distSsrDir)) {
      fs.rmSync(distSsrDir, { recursive: true, force: true });
      console.log('[Prerender] Cleaned up temporary dist-ssr directory.');
    }
  } catch (error) {
    console.error('[Prerender] Error during pre-rendering:', error);
    process.exit(1);
  }
}

prerender();
