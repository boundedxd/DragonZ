import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class AntiCobweb extends Module {
    constructor() {
        super("AntiCobweb", 0, Category.COMBAT);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            this.mc.thePlayer.isInWeb = false;
        }
    }
}
