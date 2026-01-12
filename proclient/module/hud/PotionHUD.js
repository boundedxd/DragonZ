import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class PotionHUD extends Module {
    constructor() {
        super("PotionHUD", 0, Category.HUD);
    }

    onRender() {
        if (this.isToggled()) {
            // HUD render logic here
        }
    }
}
