import * as alt from '@altv/server';

// Interface for command callback (if vchat is used)
interface CommandCallback {
    (player: alt.Player, args: string[]): void;
}

// Event handler for coordinate requests
alt.onClient('coords:request', (player: alt.Player) => {
    if (!player || !player.valid) return;

    const pos = player.pos;
    const rot = player.rot;
    const dimension = player.dimension;
    const heading = player.heading;

    // Send coordinates to client
    alt.emitClient(player, 'coords:receive', {
        x: pos.x,
        y: pos.y,
        z: pos.z,
        rotX: rot.x,
        rotY: rot.y,
        rotZ: rot.z,
        heading: heading,
        dimension: dimension
    });

    // Server log for debugging
    alt.log(`[GetCoords] ${player.name} (ID: ${player.id}) - Pos: ${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)} | Dim: ${dimension}`);
});

// Optional vchat integration
alt.on('resourceStart', () => {
    // Try to register vchat command
    try {
        const vchat = alt.getResource('vchat');
        if (vchat) {
            // vchat command registration
            alt.emit('chat:registerCommand', 'getcoords', (player: alt.Player) => {
                alt.emitClient(player, 'coords:trigger');
            });

            // Alias for the command
            alt.emit('chat:registerCommand', 'getcords', (player: alt.Player) => {
                alt.emitClient(player, 'coords:trigger');
            });

            alt.log('[GetCoords] ✓ Chat commands registered (/getcoords, /getcords)');
        }
    } catch (error) {
        alt.logWarning('[GetCoords] vchat not found - using event-based system');
    }

    alt.log('[GetCoords] Resource started successfully');
});
