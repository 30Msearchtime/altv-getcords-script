import * as alt from 'alt-client';

alt.onServer('coords:show', (text: string) => {
  alt.log(`[getcoords] ${text}`);
  try {
    // This may require clipboard permission on the client
    // @ts-ignore older type defs may not include this method
    alt.copyToClipboard(text);
    alt.log('[getcoords] Copied to clipboard.');
  } catch (e) {
    alt.logWarning(`[getcoords] Clipboard copy failed: ${String(e)}`);
  }
});

// Fallback usage if you don't have a chat resource:
// open the client console and run: alt.emitServer('coords:request')
