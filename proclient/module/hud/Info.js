import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class Info extends Module {
    constructor() {
        super("Info", 0, Category.HUD);
    }

    onRender() {
        if (this.isToggled()) {
            // HUD render logic here
        }
    }
}
