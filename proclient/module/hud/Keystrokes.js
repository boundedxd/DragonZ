import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class Keystrokes extends Module {
    constructor() {
        super("Keystrokes", 0, Category.HUD);
    }

    onRender() {
        if (this.isToggled()) {
            // HUD render logic here
        }
    }
}
