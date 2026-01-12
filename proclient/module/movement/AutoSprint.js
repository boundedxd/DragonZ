import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class AutoSprint extends Module {
    constructor() {
        super("AutoSprint", 0, Category.MOVEMENT);
    }

    onEnable() {
        if (this.isToggled() && this.mc && this.mc.thePlayer && !this.mc.thePlayer.isCollidedHorizontally && this.mc.thePlayer.moveForward !== 0.0) {
            this.mc.thePlayer.setSprinting(true);
        }
    }

    onDisable() {
        if (this.mc && this.mc.thePlayer) {
            this.mc.thePlayer.setSprinting(false);
        }
    }
}
