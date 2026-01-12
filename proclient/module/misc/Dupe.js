import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class Dupe extends Module {
    constructor() {
        super("Dupe", 0, Category.MISC);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            const heldItem = this.mc.thePlayer.getHeldItem();
            if (heldItem && this.mc.thePlayer.dropItem) {
                for (let i = 0; i < 10; i++) {
                    this.mc.thePlayer.dropItem(false);
                }
            }
        }
    }
}
