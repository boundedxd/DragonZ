import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class FastBow extends Module {
    constructor() {
        super("FastBow", 0, Category.COMBAT);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            if (this.mc.thePlayer.getItemInUse && this.mc.thePlayer.getItemInUse() != null) {
                if (this.mc.thePlayer.getItemInUseDuration() >= 3) {
                    this.mc.playerController.onStoppedUsingItem(this.mc.thePlayer);
                }
            }
        }
    }
}
