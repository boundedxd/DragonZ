import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class AutoWalk extends Module {
    constructor() {
        super("AutoWalk", 0, Category.MOVEMENT);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.gameSettings) {
            this.mc.gameSettings.keyBindForward.pressed = true;
        }
    }

    onDisable() {
        if (this.mc && this.mc.gameSettings) {
            this.mc.gameSettings.keyBindForward.pressed = false;
        }
        super.onDisable();
    }
}
