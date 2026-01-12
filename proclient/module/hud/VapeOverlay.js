import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class VapeOverlay extends Module {
    constructor() {
        super("VapeOverlay", 0, Category.HUD);
    }

    onRender() {
        if (this.isToggled()) {
            // HUD render logic here
        }
    }
}
