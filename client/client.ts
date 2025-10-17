import * as alt from '@altv/client';
import * as native from '@altv/natives';

// Interface for coordinate data
interface CoordinateData {
    x: number;
    y: number;
    z: number;
    rotX: number;
    rotY: number;
    rotZ: number;
    heading: number;
    dimension: number;
}

// Format and display coordinates
function displayCoordinates( CoordinateData): void {
    const { x, y, z, rotX, rotY, rotZ, heading, dimension } = data;

    // Formatted output
    const coordString = `
╔═══════════════════════════════════════════╗
║           PLAYER COORDINATES              ║
╠═══════════════════════════════════════════╣
║ Position:                                 ║
║   X: ${x.toFixed(4).padStart(12)}                    ║
║   Y: ${y.toFixed(4).padStart(12)}                    ║
║   Z: ${z.toFixed(4).padStart(12)}                    ║
║                                           ║
║ Rotation:                                 ║
║   Pitch: ${rotX.toFixed(4).padStart(12)}             ║
║   Roll:  ${rotY.toFixed(4).padStart(12)}             ║
║   Yaw:   ${rotZ.toFixed(4).padStart(12)}             ║
║                                           ║
║ Heading: ${heading.toFixed(4).padStart(12)}          ║
║ Dimension: ${dimension.toString().padStart(8)}       ║
╚═══════════════════════════════════════════╝`;

    // Console output
    alt.log(coordString);

    // Compact version for clipboard
    const clipboardText = `Pos: ${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)} | Rot: ${rotX.toFixed(2)}, ${rotY.toFixed(2)}, ${rotZ.toFixed(2)} | Heading: ${heading.toFixed(2)} | Dim: ${dimension}`;

    // Copy to clipboard
    try {
        alt.copyToClipboard(clipboardText);
        alt.log('[GetCoords] ✓ Coordinates copied to clipboard!');
        
        // Optional notification (if available)
        native.beginTextCommandThefeedPost('STRING');
        native.addTextComponentSubstringPlayerName('~g~Coordinates copied!');
        native.endTextCommandThefeedPostTicker(false, true);
    } catch (error) {
        alt.logError('[GetCoords] ✗ Failed to copy to clipboard');
        alt.logError(`Error: ${error}`);
    }
}

// Server event: Receive coordinates
alt.onServer('coords:receive', ( CoordinateData) => {
    displayCoordinates(data);
});

// Server event: Coordinate trigger (from chat command)
alt.onServer('coords:trigger', () => {
    alt.emitServer('coords:request');
});

// Keybind (optional) - Press F7 for coordinates
alt.on('keyup', (key: number) => {
    // F7 = Key 118
    if (key === 118) {
        alt.emitServer('coords:request');
    }
});

// Console command for developers
alt.log('[GetCoords] Client loaded - Press F7 or use /getcoords');
