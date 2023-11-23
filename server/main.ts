import * as alt from 'alt-server';

alt.on('playerConnect', (player) => {
  alt.log(`Player ${player.id} connected.`);

  player.on('chatMessage', (message) => {
    if (message !== '/getcords') {
      return;
    }

    try {
      const position = player.pos;
      if (!position) {
        throw new Error('Position konnte nicht abgerufen werden');
      }
      player.emit('showCoords', position.x, position.y, position.z);
      alt.log(`Koordinaten für Spieler ${player.id} abgerufen: ${position.x}, ${position.y}, ${position.z}`);
    } catch (error) {
      alt.logError(`Fehler beim Abrufen der Koordinaten für Spieler ${player.id}: ${error.message}`);
      player.emit('coordsError', error.message);
    }
  });
});
