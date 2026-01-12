import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class JetPack extends Module {
    constructor() {
        super("Jetpack", 0, Category.MOVEMENT);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.gameSettings && this.mc.thePlayer) {
            if (this.mc.gameSettings.keyBindJump.pressed) {
                this.mc.thePlayer.jump();
            }
        }
    }
}
