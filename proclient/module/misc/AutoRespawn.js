import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class AutoRespawn extends Module {
    constructor() {
        super("AutoRespawn", 0, Category.MISC);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            if (this.mc.thePlayer.getHealth && this.mc.thePlayer.getHealth() === 0) {
                if (this.mc.thePlayer.respawnPlayer) {
                    this.mc.thePlayer.respawnPlayer();
                }
            }
        }
    }
}
