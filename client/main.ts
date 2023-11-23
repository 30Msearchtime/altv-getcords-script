import * as alt from 'alt-client';

alt.onServer('showCoords', (x: number, y: number, z: number) => {
  const formattedX = x.toFixed(2);
  const formattedY = y.toFixed(2);
  const formattedZ = z.toFixed(2);
  alt.log(`Aktuelle Koordinaten: X: ${formattedX}, Y: ${formattedY}, Z: ${formattedZ}`);
});

alt.onServer('coordsError', (errorMessage: string) => {
  alt.logError(`Fehler beim Abrufen der Koordinaten: ${errorMessage}`);
});
