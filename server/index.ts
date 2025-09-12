import * as alt from 'alt-server';

// Commands supported (both spellings kept for backward compatibility)
const COMMANDS = ['getcoords', 'getcords'];

function fmt(n: number) {
  return n.toFixed(4);
}

function buildCoordLine(player: alt.Player) {
  const { x, y, z } = player.pos;
  return `Coords: x=${fmt(x)} y=${fmt(y)} z=${fmt(z)} (dim=${player.dimension})`;
}

// Optional vchat integration (if the resource is present)
let vchat: undefined | typeof import('vchat');
try {
  // @ts-ignore dynamic import; only works if vchat resource is available
  vchat = await import('vchat');
} catch {
  vchat = undefined;
}

if (vchat) {
  for (const name of COMMANDS) {
    vchat.registerCmd(name, (player: alt.Player) => {
      const line = buildCoordLine(player);
      // @ts-ignore vchat types live in the vchat resource itself
      vchat!.send(player, line);
      alt.emitClient(player, 'coords:show', line);
    });
  }
  alt.log('[getcoords] vchat detected → chat commands registered.');
} else {
  alt.log('[getcoords] vchat not found → using client event only.');
}

// Fallback: client can request coords via event
alt.onClient('coords:request', (player: alt.Player) => {
  const line = buildCoordLine(player);
  alt.emitClient(player, 'coords:show', line);
});
