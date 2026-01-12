import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class NoHurtCam extends Module {
    constructor() {
        super("NoHurtCam", 0, Category.COMBAT);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            this.mc.thePlayer.maxHurtTime = 0;
        }
    }
}
